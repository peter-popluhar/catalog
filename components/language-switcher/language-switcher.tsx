import cslx from 'clsx'
import {useSettingsContext} from '../../context/settings-context'
import styles from './language-switcher.module.scss'

export default function LanguageSwitcher() {
	const {setLanguage, lng} = useSettingsContext()

	const handlelanguage = (lng) => {
		setLanguage(lng)
	}

	return (
		<ul className={styles.wrapper}>
			<li className={styles.item}>
				<img
					alt='english language'
					src='/uk.svg'
					className={cslx(styles.flag, lng === 'en' && styles.active)}
					onClick={() => handlelanguage('en')}
					title='English'
				/>
			</li>
			<li className={styles.item}>
				<img
					alt='swahili language'
					src='/kenya.svg'
					className={cslx(styles.flag, lng === 'sw' && styles.active)}
					onClick={() => handlelanguage('sw')}
					title='Swahili'
				/>
			</li>
		</ul>
	)
}
