import {withIronSession} from 'next-iron-session'

const {COOKIE_NAME} = process.env

export default function Home({user}) {
	return (
		<main>
			<h1>Home</h1>
			<h2>{user.name}</h2>
		</main>
	)
}

export const getServerSideProps = withIronSession(
	async ({req}) => {
		const user = req.session.get('user')

		if (!user) {
			return {
				redirect: {
					permanent: false,
					destination: '/login',
				},
			}
		}

		return {
			props: {user},
		}
	},
	{
		cookieName: COOKIE_NAME,
		cookieOptions: {
			secure: process.env.NODE_ENV === 'production' ? true : false,
		},
		password: process.env.APPLICATION_SECRET,
	}
)
