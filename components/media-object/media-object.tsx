import Image from 'next/image'
import styles from './media-object.module.scss'
import label from './../../styles-modules/label.module.scss'
import btn from './../../styles-modules/buttons.module.scss'

export default function MediaObject() {
	return (
		<article className={styles.mediaObject}>
			<div className={styles.img}>
				<Image
					alt='product name'
					src='/150.png'
					layout='intrinsic'
					width={320}
					height={200}
				/>
			</div>

			<div className={styles.info}>
				<span className={`strong ${label.label}`}>TOP 17</span>
				<h2 className='text--md'>Apple iPhone 12 Pro 128GB</h2>
				<p className={`text--sm ${styles.flags}`}>
					phone, touch screen, IOS, 256GB
				</p>
				<p className='text--sm text--overflow'>
					Teams is probably number “not-on-the-list”. But it turns out that
					making your app accessible where your users are already working has
					some profound benefits. In this article, we’ll look at how Teams makes
					web
				</p>
			</div>
			<div className={styles.action}>
				<p className='text--md strong nbsp'>36 990 Kč</p>
				<button className={`${btn.btnAction}`}>Edit</button>
			</div>
		</article>
	)
}
