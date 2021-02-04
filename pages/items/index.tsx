import {connectToDatabase} from '../../util/mongodb'
import MediaObject from './../../components/media-object'
import grid from './../../components/global/grid.module.scss'
import {MediaObjectsType} from './../../types/media-object-type'
import MastHead from './../../components/masthead'
const {MONGO_DB_COLLECTION} = process.env

type Props = {
	isConnected: any
	items: MediaObjectsType
}

export default function Home({isConnected, items}: Props) {
	if (!isConnected) {
		return (
			<MastHead
				title='There was a problem with database connection.'
				subtitle='Please try again later, or contact your administrator.'
			/>
		)
	}

	if (items.length < 1) {
		return (
			<MastHead
				title='Looks like there are not any items yet.'
				subtitle={`Please go to Add item page!`}
			/>
		)
	}

	return (
		<main>
			<MastHead title='Catalog' />
			<section className={grid.grid}>
				{items.map((item) => (
					<MediaObject data={item} key={item._id} />
				))}
			</section>
		</main>
	)
}

export async function getServerSideProps() {
	let items = []
	const {client, db} = await connectToDatabase()
	const isConnected = await client.isConnected()

	try {
		items = await db.collection(MONGO_DB_COLLECTION).find({}).toArray()
	} catch (e) {
		console.log(e)
	}

	return {
		props: {isConnected, items: JSON.parse(JSON.stringify(items))},
	}
}
