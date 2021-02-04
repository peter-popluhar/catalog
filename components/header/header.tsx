import {ReactNode} from 'react'
import Link from 'next/link'
import header from './header.module.scss'
import Logo from './../logo'
import container from './../global/container.module.scss'
import btn from './../global/buttons.module.scss'
import {navigationCopy} from './../../copy/navigation'
import {useLanguageContext} from './../../context/language-context'
import LanguageSwitcher from './../language-switcher'

type Props = {
	children: ReactNode
}

export default function Header({children}: Props) {
	const {lng} = useLanguageContext()

	const copyPath = navigationCopy?.[lng]

	return (
		<header className={`${header.header}`}>
			<div className={` ${container.container} ${header.wrapper}`}>
				<Logo />
				{children}

				<Link href='/'>
					<a className={btn.btnPrimary}>{copyPath.login}</a>
				</Link>

				<LanguageSwitcher />
			</div>
		</header>
	)
}
