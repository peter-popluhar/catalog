import {useState} from 'react'
import cslx from 'clsx'
import styles from './settings.module.scss'
import btn from './button.module.scss'
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

	const handleLogout = (e) => {
		e.preventDefault()

		fetch('/api/logout', {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify({}),
		}).then((res) => {
			if (res.status === 200) {
				router.push('/login')
			}
		})
	}

	return (
		<div className={styles.wrapper}>
			<button className={btn.btnProfile} onClick={handleListVisibility}>
				{copyPath.profile}
			</button>
			<ul className={cslx(styles.list, isVisible && styles.visible)}>
				<li className={styles.item}>
					<span className={styles.link}>Hello User</span>
				</li>
				<li className={styles.item}>
					<button onClick={handleLogout} className={btn.btnLogout}>
						{copyPath.logout}
					</button>
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
