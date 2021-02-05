import {ReactNode} from 'react'
import header from './header.module.scss'
import Logo from './../logo'
import container from './../global/container.module.scss'
import Settings from './../settings'

type Props = {
	children: ReactNode
}

export default function Header({children}: Props) {
	return (
		<header className={`${header.header}`}>
			<div className={` ${container.container} ${header.wrapper}`}>
				<Logo />
				{children}
				<Settings />
			</div>
		</header>
	)
}
