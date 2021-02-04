import Head from 'next/head'
import type {AppProps} from 'next/app'
import './../styles/index.scss'
import Layout from './../components/layout'
import {LanguageProvider} from './../context/language-context'

function MyApp({Component, pageProps}: AppProps) {
	return (
		<>
			<Head>
				<title>Catalog app</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<LanguageProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</LanguageProvider>
		</>
	)
}
export default MyApp
