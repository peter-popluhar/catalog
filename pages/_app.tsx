import './../styles/index.scss'
import c from './../styles-modules/container.module.scss'
import Layout from './../components/layout'

function MyApp({Component, pageProps}) {
	return (
		<Layout>
			<div className={c.container}>
				<Component {...pageProps} />
			</div>
		</Layout>
	)
}
export default MyApp
