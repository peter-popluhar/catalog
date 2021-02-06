import {useState, useRef, useEffect} from 'react'
import cslx from 'clsx'
import styles from './settings.module.scss'
import btn from './button.module.scss'
import LanguageSwitcher from './../language-switcher'
import LayoutSwitcher from '../layout-switcher'
import ThemeSwitcher from './../theme-switcher'
import {useRouter} from 'next/router'
import {useSettingsContext} from './../../context/settings-context'
import {settingsCopy} from './../../copy/settings'
import overlay from './overlay.module.scss'

export default function Settings() {
	const [open, setOpen] = useState(false)
	const router = useRouter()
	const pathname = router.pathname
	const {lng} = useSettingsContext()
	const copyPath = settingsCopy?.[lng]
	const node = useRef<HTMLDivElement | null>()

	const handleListVisibility = () => {
		setOpen(!open)
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
		setOpen(false)
	}

	const handleClickOutside = (e) => {
		if (node.current.contains(e.target)) {
			return
		}
		setOpen(false)
	}

	useEffect(() => {
		if (open) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [open])

	return (
		<>
			<div className={styles.wrapper} ref={node}>
				<button
					className={cslx(btn.btnProfile, pathname === '/login' && btn.Nouser)}
					onClick={handleListVisibility}
				>
					{copyPath.profile}
				</button>
				<ul className={cslx(styles.list, open && styles.visible)}>
					{pathname !== '/login' && (
						<>
							<li className={styles.item}>
								<span className={styles.link}>{copyPath.greet} George</span>
							</li>
							<li className={styles.item}>
								<button onClick={handleLogout} className={btn.btnLogout}>
									{copyPath.logout}
								</button>
							</li>
						</>
					)}
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
			<div className={cslx(overlay.overlay, open && overlay.isActive)} />
		</>
	)
}
