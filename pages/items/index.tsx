import {connectToDatabase} from '../../util/mongodb'
import MediaObject from './../../components/media-object'
import grid from './../../components/global/grid.module.scss'
import {MediaObjectsType} from './../../types/media-object-type'
import MastHead from './../../components/masthead'
const {MONGO_DB_COLLECTION} = process.env
import {itemsCopy} from '../../copy/items'
import {useLanguageContext} from './../../context/language-context'

type Props = {
	isConnected: any
	items: MediaObjectsType
}

export default function Home({isConnected, items}: Props) {
	const {lng} = useLanguageContext()
	const lngPath = itemsCopy?.[lng]

	if (!isConnected) {
		return (
			<MastHead
				title={lngPath.notConnected.title}
				subtitle={lngPath.notConnected.subTitle}
			/>
		)
	}

	if (items.length < 1) {
		return (
			<MastHead
				title={lngPath.notItems.title}
				subtitle={lngPath.notItems.subTitle}
			/>
		)
	}

	return (
		<main>
			<MastHead title={lngPath.title} />
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
		items = await db
			.collection(MONGO_DB_COLLECTION)
			.find({})
			.sort({_id: -1})
			.toArray()
	} catch (e) {
		console.log(e)
	}

	return {
		props: {isConnected, items: JSON.parse(JSON.stringify(items))},
	}
}
