import {connectToDatabase} from '../../util/mongodb'
import {ObjectID} from 'mongodb'

const {MONGO_DB_COLLECTION} = process.env

function isEmptyString(obj) {
	for (const key in obj) {
		if (obj[key] === '') {
			return true
		}
	}

	return false
}

export default async function Update(req, res) {
	const data = req.body
	const id = req.body.id

	if (req.method !== 'PUT') {
		res.setHeader('Allow', ['PUT'])
		res.status(405).end(`Method ${req.method} Not Allowed`)
		return
	}

	if (isEmptyString(data)) {
		res.setHeader('Allow', ['PUT'])
		res.status(203).end(`Non-Authoritative Information`)
		return
	}

	try {
		const objectId = await ObjectID(id)
		const {db} = await connectToDatabase()
		const collection = await db.collection(MONGO_DB_COLLECTION)
		await collection.replaceOne({_id: objectId}, data)
		res.json(objectId)
		res.status(201)
	} catch (e) {
		console.log(e)
	}
}
