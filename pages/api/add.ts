import {connectToDatabase} from '../../util/mongodb'

const {MONGO_DB_COLLECTION} = process.env

export default async function Add(req, res) {
	const data = req.body
	const {firstName, lastName, email, phone} = data
	console.log(Object.keys(data))

	if (req.method !== 'POST') {
		res.setHeader('Allow', ['POST'])
		res.status(405).end(`Method ${req.method} Not Allowed`)
		return
	}

	if (firstName === '' || lastName === '' || email === '' || phone === '') {
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
