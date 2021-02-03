import {ReactNode} from 'react'
import Link from 'next/link'
import header from './header.module.scss'
import Logo from './../logo'
import container from './../../styles-modules/container.module.scss'
import btn from './../../styles-modules/buttons.module.scss'

type Props = {
	children: ReactNode
}

export default function Header({children}: Props) {
	return (
		<header className={`${header.header}`}>
			<div className={` ${container.container} ${header.wrapper}`}>
				<Logo />
				{children}
				<div>
					<Link href='/'>
						<a className={`${btn.btnPrimary}`}>Login</a>
					</Link>
				</div>
			</div>
		</header>
	)
}
