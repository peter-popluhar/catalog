import Link from 'next/link'

export default function Navigation() {
	return (
		<nav>
			<ul>
				<li>
					<Link href='/items'>
						<a>All items</a>
					</Link>
				</li>
				<li>
					<Link href='/add'>
						<a>Add item</a>
					</Link>
				</li>
			</ul>
		</nav>
	)
}
