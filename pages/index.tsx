import MastHead from './../components/masthead'
import {loginCopy} from './../copy/login'
import {useLanguageContext} from './../context/language-context'

export default function Home() {
	const {lng} = useLanguageContext()
	const lngPath = loginCopy?.[lng]

	return (
		<main>
			<MastHead title={lngPath.title} />
		</main>
	)
}

export async function getServerSideProps() {
	return {
		props: {},
	}
}
