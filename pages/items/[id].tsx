import {useRouter} from 'next/router'
import {useCallback} from 'react'
import {connectToDatabase} from '../../util/mongodb'
import {ObjectID} from 'mongodb'
import btn from './../../styles-modules/buttons.module.scss'

const {MONGO_DB_COLLECTION} = process.env

const fetchOptions = {
	method: 'DELETE',
	headers: {
		'Content-Type': 'application/json',
	},
}

export default function Item({data}) {
	const router = useRouter()

	if (!data) {
		return <h1>We are sorry, but this Item Doesnt exists anymore!</h1>
	}

	const {_id, labelContent, name, flags, description, price} = data

	const handleDelete = useCallback((id) => {
		const options = {
			...fetchOptions,
			body: JSON.stringify(id),
		}

		fetch('/api/delete', options).then((res) => {
			if (res.ok) router.push('/items')
		})
	}, [])

	return (
		<>
			<h1>{name}</h1>
			<p>{labelContent}</p>
			<p>{name}</p>
			<p>{flags}</p>
			<p>{description}</p>
			<p>{price}</p>
			<button className={`${btn.btnSuccess} ${btn.btnLg}`}>Edit</button>
			<button
				onClick={() => handleDelete(_id)}
				className={`${btn.btnDelete} ${btn.btnLg}`}
			>
				Delete
			</button>
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
