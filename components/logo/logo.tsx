import Image from 'next/image'

export default function Logo() {
	return (
		<Image
			alt='Logo'
			src='/logo.png'
			layout='intrinsic'
			width={130}
			height={25}
		/>
	)
}
