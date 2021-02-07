import {GetServerSideProps} from 'next'
import {withIronSession} from 'next-iron-session'
import {connectToDatabase} from '../../util/mongodb'
import MediaObject from './../../components/media-object'
import grid from './../../components/global/grid.module.scss'
import {ItemsType} from '../../types/data-type'
import MastHead from './../../components/masthead'
import {itemsCopy} from '../../copy/items'
import {useSettingsContext} from './../../context/settings-context'
import cslx from 'clsx'
import {UserType} from './../../types/user-type'

const {MONGO_DB_COLLECTION, COOKIE_NAME} = process.env

type Props = {
	isConnected: boolean
	items: ItemsType
}

export default function List({isConnected, items}: Props) {
	const {lng, layout} = useSettingsContext()
	const lngPath = itemsCopy?.[lng]

	if (!isConnected) {
		return (
			<MastHead
				title={lngPath.notConnected.title}
				subtitle={lngPath.notConnected.subTitle}
			/>
		)
	}

	if (items.length < 1) {
		return (
			<MastHead
				title={lngPath.notItems.title}
				subtitle={lngPath.notItems.subTitle}
			/>
		)
	}

	return (
		<main>
			<MastHead title={lngPath.title} />
			<section className={cslx(grid.grid, layout === 'list' && grid.gridList)}>
				{items.map((item) => (
					<MediaObject data={item} key={item._id} />
				))}
			</section>
		</main>
	)
}

export const getServerSideProps: GetServerSideProps = withIronSession(
	async ({req}) => {
		const user: UserType = req.session.get('user')

		if (!user) {
			return {
				redirect: {
					permanent: false,
					destination: '/login',
				},
			}
		}

		let items: ItemsType = []
		const {client, db} = await connectToDatabase()
		const isConnected = await client.isConnected()

		try {
			items = await db
				.collection(MONGO_DB_COLLECTION)
				.find({})
				.sort({_id: -1})
				.toArray()
		} catch (e) {
			console.log(e)
		}

		return {
			props: {isConnected, items: JSON.parse(JSON.stringify(items)), user},
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
