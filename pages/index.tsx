import MastHead from './../components/masthead'
import {loginCopy} from './../copy/login'
import {useSettingsContext} from './../context/settings-context'

export default function Home() {
	const {lng} = useSettingsContext()
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
