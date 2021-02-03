import {ReactNode} from 'react'
import header from './header.module.scss'
import Logo from './../logo'
import Link from 'next/link'
import container from './../../styles-modules/container.module.scss'
import btn from './../../styles-modules/buttons.module.scss'

type Props = {
	children: ReactNode
}

export default function Header({children}: Props) {
	return (
		<header className={`${header.header}`}>
			<div className={` ${container.container} ${header.wrapper}`}>
				<Link href='/'>
					<a>
						<Logo />
					</a>
				</Link>

				{children}
				<div>
					<button className={`${btn.btnPrimary}`}>Login</button>
				</div>
			</div>
		</header>
	)
}
