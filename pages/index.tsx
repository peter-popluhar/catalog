import Head from 'next/head'
import {connectToDatabase} from '../util/mongodb'
import MediaObject from './../components/media-object'
import grid from './../styles-modules/grid.module.scss'

export default function Home({isConnected}) {
	return (
		<>
			<Head>
				<title>Catalog app</title>
				{/* <link rel='icon' href='/favicon.ico' /> */}
			</Head>
			<main>
				<h1>Catalog</h1>
				<section className={grid.grid}>
					<MediaObject />
					<MediaObject />
					<MediaObject />
					<MediaObject />
					<MediaObject />
					<MediaObject />
					<MediaObject />
					<MediaObject />
					<MediaObject />
					<MediaObject />
				</section>
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
