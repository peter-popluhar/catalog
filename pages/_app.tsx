import './../styles/index.scss'
import c from './../styles-modules/container.module.scss'
import Layout from './../components/layout'

function MyApp({Component, pageProps}) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}
export default MyApp
