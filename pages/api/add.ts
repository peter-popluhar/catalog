import {connectToDatabase} from '../../util/mongodb'

const {MONGO_DB_COLLECTION} = process.env

function isEmptyString(obj) {
	for (const key in obj) {
		if (obj[key] === '') {
			return true
		}
	}

	return false
}

export default async function Add(req, res) {
	const data = req.body

	if (req.method !== 'POST') {
		res.setHeader('Allow', ['POST'])
		res.status(405).end(`Method ${req.method} Not Allowed`)
		return
	}

	if (isEmptyString(data)) {
		res.setHeader('Allow', ['POST'])
		res.status(203).end(`Non-Authoritative Information`)
		return
	}

	try {
		const {db} = await connectToDatabase()
		const collection = await db.collection(MONGO_DB_COLLECTION)
		await collection.insertOne(data)
		const items = await collection.find({}).toArray()
		res.json(items)
		res.status(201)
	} catch (e) {
		console.log(e)
	}
}
