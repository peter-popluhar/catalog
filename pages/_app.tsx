import './../styles/index.scss'
import c from './../styles-modules/container.module.scss'

function MyApp({Component, pageProps}) {
	return (
		<div className={c.container}>
			<Component {...pageProps} />
		</div>
	)
}
export default MyApp
