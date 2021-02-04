import Link from 'next/link'
import Image from 'next/image'
import styles from './media-object.module.scss'
import flag from './../global/flag.module.scss'
import btn from './../global/buttons.module.scss'
import {MediaObjectType} from './../../types/media-object-type'

type Props = {
	data: MediaObjectType
}

export default function MediaObject({data}: Props) {
	const {_id, labelContent, name, flags, description, price} = data
	return (
		<Link href={`/items/${_id}`}>
			<a className={styles.link}>
				<article className={styles.mediaObject}>
					<div className={styles.img}>
						<Image
							alt={name}
							src='/150.png'
							layout='intrinsic'
							width={320}
							height={200}
						/>
					</div>

					<div className={styles.info}>
						<span className={`strong ${flag.flag}`}>{labelContent}</span>
						<h2 className='text--md'>{name}</h2>
						<p className={`text--sm ${styles.flags}`}>{flags}</p>
						<p className='text--sm text--overflow'>{description}</p>
					</div>
					<div className={styles.action}>
						<p className='text--md strong nbsp'>{price}</p>
						<button className={`${btn.btnAction} ${btn.btnLg}`}>Edit</button>
					</div>
				</article>
			</a>
		</Link>
	)
}
