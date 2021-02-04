import cslx from 'clsx'
import {useLanguageContext} from '../../context/language-context'
import styles from './language-switcher.module.scss'

export default function LanguageSwitcher() {
	const {setLanguage, lng} = useLanguageContext()

	const handlelanguage = (lng) => {
		setLanguage(lng)
	}

	return (
		<div className={styles.wrapper}>
			<img
				alt='english language'
				src='/uk.svg'
				className={cslx(styles.flag, lng === 'en' && styles.active)}
				onClick={() => handlelanguage('en')}
				title='English'
			/>
			<img
				alt='swahili language'
				src='/kenya.svg'
				className={cslx(styles.flag, lng === 'sw' && styles.active)}
				onClick={() => handlelanguage('sw')}
				title='Swahili'
			/>
		</div>
	)
}
