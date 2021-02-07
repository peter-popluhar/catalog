import {useCallback} from 'react'
import styles from './theme-switcher.module.scss'
import cslx from 'clsx'
import {useSettingsContext} from './../../context/settings-context'
import {settingsCopy} from './../../copy/settings'

export default function ThemeSwitcher() {
	const {theme, setTheme, lng} = useSettingsContext()
	const copyPath = settingsCopy?.[lng]

	const handleTheme = useCallback((theme: string) => {
		setTheme(theme)
	}, [])

	return (
		<ul className={styles.wrapper}>
			<li
				className={cslx(styles.item, theme === 'light' && styles.active)}
				onClick={() => handleTheme('light')}
			>
				<input
					type='radio'
					name='theme'
					id='light'
					value='light'
					className={styles.input}
				/>
				<label htmlFor='light' className={styles.label}>
					<span>{copyPath.light}</span>
				</label>
			</li>
			<li
				className={cslx(styles.item, theme === 'dark' && styles.active)}
				onClick={() => handleTheme('dark')}
			>
				<input
					type='radio'
					name='theme'
					id='dark'
					value='dark'
					className={styles.input}
				/>
				<label htmlFor='dark' className={styles.label}>
					<span>{copyPath.dark}</span>
				</label>
			</li>
		</ul>
	)
}
