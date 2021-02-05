import MastHead from './../components/masthead'
import {loginCopy} from './../copy/login'
import {useSettingsContext} from './../context/settings-context'
import styles from './../components/form/form.module.scss'
import grid from './../components/global/grid.module.scss'
import btn from './../components/global/buttons.module.scss'
import FormField from './../components/form/form-field'

export default function Home() {
	const {lng} = useSettingsContext()
	const lngPath = loginCopy?.[lng]

	return (
		<main>
			<MastHead title={lngPath.title} />
			<div className={styles.wrapper}>
				<form action='/api/login' method='post'>
					<div className={grid.grid}>
						<fieldset>
							<legend className='text--lg'>{lngPath.legend}</legend>
							<FormField label={lngPath.user} inputType='text' name='name' />
							<FormField
								label={lngPath.pass}
								inputType='password'
								name='name'
							/>
						</fieldset>
					</div>
					<input type='submit' value={lngPath.btn} className={btn.btnPrimary} />
				</form>
			</div>
		</main>
	)
}

export async function getServerSideProps() {
	return {
		props: {},
	}
}
