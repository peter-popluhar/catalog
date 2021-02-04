import {ReactNode} from 'react'
import Header from './../header'
import Footer from './../footer'
import Navigation from '../navigation'
import styles from './../global/container.module.scss'

type Props = {
	children: ReactNode
}

export default function Layout({children}: Props) {
	console.log(1)
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
