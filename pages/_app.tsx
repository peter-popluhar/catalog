import Head from 'next/head'
import type {AppProps} from 'next/app'
import './../styles/index.scss'
import Layout from './../components/layout'
import {SettingsProvider} from './../context/settings-context'

function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<title>Catalog app</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<SettingsProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SettingsProvider>
		</>
	)
}
export default MyApp
