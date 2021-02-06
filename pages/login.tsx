import Login from './../components/login'

export default function Home() {
	return (
		<main>
			<Login />
		</main>
	)
}

export async function getServerSideProps() {
	return {
		props: {},
	}
}
