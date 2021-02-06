import {withIronSession} from 'next-iron-session'

const {APPLICATION_SECRET, COOKIE_NAME} = process.env

async function Logout(req, res) {
	req.session.destroy()
	res.send('Logged out')
}

export default withIronSession(Logout, {
	cookieName: COOKIE_NAME,
	password: APPLICATION_SECRET,
	cookieOptions: {
		secure: process.env.NODE_ENV === 'production',
	},
})
