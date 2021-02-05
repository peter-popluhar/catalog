import {ReactNode} from 'react'
import Header from './../header'
import Footer from './../footer'
import Navigation from '../navigation'
import styles from './../global/container.module.scss'
import {useSettingsContext} from './../../context/settings-context'

type Props = {
	children: ReactNode
}

export default function Layout({children}: Props) {
	const {theme} = useSettingsContext()

	return (
		<div className={theme}>
			<Header>
				<Navigation />
			</Header>
			<div className={styles.container}>{children}</div>
			<Footer />
		</div>
	)
}
