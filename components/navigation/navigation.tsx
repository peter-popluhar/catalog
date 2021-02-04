import Link from 'next/link'
import {navigationCopy} from './../../copy/navigation'

export default function Navigation() {
	const lng = 'en'

	const copyPath = navigationCopy?.[lng]

	return (
		<nav>
			<ul>
				<li>
					<Link href='/items'>
						<a>{copyPath.allItems}</a>
					</Link>
				</li>
				<li>
					<Link href='/add'>
						<a>{copyPath.addItem}</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
