import MastHead from './../components/masthead'
import {loginCopy} from './../copy/login'

export default function Home() {
	const lng = 'en'
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
