import {footerCopy} from './../../copy/footer'
import footer from './footer.module.scss'
import {useLanguageContext} from './../../context/language-context'

export default function Footer() {
	const {lng} = useLanguageContext()
	const lngPath = footerCopy?.[lng]

	return (
		<footer className={footer.footer}>{lngPath.copyright} © 2007–2021</footer>
	)
}
