import {useState} from 'react'
import cslx from 'clsx'
import Link from 'next/link'
import styles from './settings.module.scss'
import LanguageSwitcher from './../language-switcher'
import LayoutSwitcher from '../layout-switcher'
import ThemeSwitcher from './../theme-switcher'
import {useRouter} from 'next/router'
import {useSettingsContext} from './../../context/settings-context'
import {settingsCopy} from './../../copy/settings'

export default function Settings() {
	const [isVisible, setVisile] = useState(false)
	const router = useRouter()
	const pathname = router.pathname
	const {lng} = useSettingsContext()
	const copyPath = settingsCopy?.[lng]

	const handleListVisibility = () => {
		setVisile(!isVisible)
	}

	return (
		<div className={styles.wrapper}>
			<button className={styles.button} onClick={handleListVisibility}>
				{copyPath.profile}
			</button>
			<ul className={cslx(styles.list, isVisible && styles.visible)}>
				<li className={styles.item}>
					<Link href='/profile'>
						<a href='' className={styles.link}>
							Name
							<span className='text--sm'>{copyPath.profile}</span>
						</a>
					</Link>
				</li>
				<li className={styles.item}>
					<Link href='/logout'>
						<a href='' className={styles.link}>
							{copyPath.logout}
						</a>
					</Link>
				</li>
				{pathname === '/items' && (
					<li className={styles.item}>
						<LayoutSwitcher />
					</li>
				)}

				<li className={styles.item}>
					<ThemeSwitcher />
				</li>

				<li className={styles.item}>
					<LanguageSwitcher />
				</li>
			</ul>
		</div>
	)
}
