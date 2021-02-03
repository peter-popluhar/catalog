import Head from 'next/head'
import {connectToDatabase} from '../util/mongodb'

export default function Home({isConnected}) {
	return (
		<>
			<Head>
				<title>Catalog app</title>
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>
			<main>
				<p>content</p>
			</main>
		</>
	)
}

export async function getServerSideProps(context) {
	const {client} = await connectToDatabase()

	const isConnected = await client.isConnected()

	return {
		props: {isConnected},
	}
}
