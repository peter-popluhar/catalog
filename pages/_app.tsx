import Head from 'next/head'
import type {AppProps} from 'next/app'
import './../styles/index.scss'
import Layout from './../components/layout'

function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<title>Catalog app</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}
export default MyApp
