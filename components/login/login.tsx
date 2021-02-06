import {useRef} from 'react'
import MastHead from './../masthead'
import {loginCopy} from './../../copy/login'
import {useSettingsContext} from './../../context/settings-context'
import styles from './../form/form.module.scss'
import grid from './../global/grid.module.scss'
import FormField from './../form/form-field'
import LoginButton from './../form/buttons/login-button'

export default function Login() {
	const form = useRef<HTMLFormElement | null>()
	const {lng} = useSettingsContext()
	const lngPath = loginCopy?.[lng]

	return (
		<main>
			<MastHead title={lngPath.title} />
			<div className={styles.wrapper}>
				<form action='/api/login' method='post' ref={form}>
					<div className={grid.grid}>
						<fieldset>
							<legend className='text--lg'>{lngPath.legend}</legend>
							<FormField label={lngPath.user} inputType='text' name='name' />
							<FormField
								label={lngPath.pass}
								inputType='password'
								name='password'
							/>
						</fieldset>
					</div>
					<LoginButton form={form} />
				</form>
			</div>
		</main>
	)
}
