import MastHead from './../components/masthead'

export default function Home() {
	return (
		<main>
			<MastHead title='Login' />
		</main>
	)
}

export async function getServerSideProps() {
	return {
		props: {},
	}
}
