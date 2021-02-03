export default function Home() {
	return (
		<main>
			<h1>Login</h1>
		</main>
	)
}

export async function getServerSideProps() {
	return {
		props: {},
	}
}
