import {footerCopy} from './../../copy/footer'
import footer from './footer.module.scss'

export default function Footer() {
	const lng = 'en'
	const lngPath = footerCopy?.[lng]

	return (
		<footer className={footer.footer}>{lngPath.copyright} © 2007–2021</footer>
	)
}
