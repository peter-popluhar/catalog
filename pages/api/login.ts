import {isEmptyFieldValidator} from '../../util/empty-field-validator'

export default async function Add(req, res) {
	const data = req.body
	console.log(data)

	if (req.method !== 'POST') {
		res.setHeader('Allow', ['POST'])
		res.status(405).end(`Method ${req.method} Not Allowed`)
		return
	}

	if (isEmptyFieldValidator(data)) {
		res.setHeader('Allow', ['POST'])
		res.status(203).end(`Non-Authoritative Information`)
		return
	}

	try {
		res.json(data)
		res.status(201)
	} catch (e) {
		console.log(e)
	}
}
