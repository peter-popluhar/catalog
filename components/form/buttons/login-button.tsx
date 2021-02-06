import {MutableRefObject} from 'react'
import {useFormHook} from '../use-form-hook'
import btn from './../../global/buttons.module.scss'
import {formCopy} from '../../../copy/form'
import {useSettingsContext} from '../../../context/settings-context'

type Props = {
	form: MutableRefObject<HTMLFormElement>
}

export default function LoginButton({form}: Props) {
	const {handleForm, btnDisabled, isError, errorMsg} = useFormHook(
		form,
		'/api/login',
		'POST',
		'/items'
	)
	const {lng} = useSettingsContext()
	const lngPath = formCopy?.[lng]

	return (
		<>
			{isError && <p>{errorMsg}</p>}
			<input
				tabIndex={0}
				type='submit'
				value={lngPath.loginBtn}
				disabled={btnDisabled}
				className={btn.btnPrimary}
				onClick={(e) => handleForm(e, null)}
			/>
		</>
	)
}
