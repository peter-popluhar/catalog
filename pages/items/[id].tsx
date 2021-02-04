import {connectToDatabase} from '../../util/mongodb'
import {ObjectID} from 'mongodb'
import MastHead from './../../components/masthead'
import Form from './../../components/form'
import {itemCopy} from '../../copy/items'
import {useLanguageContext} from './../../context/language-context'

const {MONGO_DB_COLLECTION} = process.env

export default function Item({data}) {
	const {lng} = useLanguageContext()
	const lngPath = itemCopy?.[lng]

	if (!data) {
		return <MastHead title={lngPath.notExists} />
	}

	const {name} = data

	return (
		<>
			<MastHead title={` ${lngPath.title}: ${name}`} />
			<Form data={data} isEditable />
		</>
	)
}

export async function getServerSideProps({query}) {
	const {id} = query
	const {db} = await connectToDatabase()
	const objectId = await ObjectID(id)
	const data = await db.collection(MONGO_DB_COLLECTION).findOne({_id: objectId})

	return {
		props: {data: JSON.parse(JSON.stringify(data))},
	}
}
