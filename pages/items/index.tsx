import {connectToDatabase} from '../../util/mongodb'
import MediaObject from './../../components/media-object'
import grid from './../../styles-modules/grid.module.scss'
import {MediaObjectsType} from './../../types/media-object-type'

const {MONGO_DB_COLLECTION} = process.env

type Props = {
	isConnected: any
	items: MediaObjectsType
}

export default function Home({isConnected, items}: Props) {
	if (!isConnected) {
		return (
			<>
				<h2>There was a problem with database connection.</h2>
				<p> Please try again later, or contact your administrator.</p>
			</>
		)
	}

	return (
		<main>
			<h1>Catalog</h1>
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
