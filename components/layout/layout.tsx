import {ReactNode} from 'react'
import Header from './../header'
import Footer from './../footer'
import Navigation from '../navigation'
import styles from './../../styles-modules/container.module.scss'

type Props = {
	children: ReactNode
}

export default function Layout({children}: Props) {
	return (
		<>
			<Header>
				<Navigation />
			</Header>
			<div className={styles.container}>{children}</div>
			<Footer />
		</>
	)
}
