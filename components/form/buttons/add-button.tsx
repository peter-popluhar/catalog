import {MutableRefObject} from 'react'
import {useFormHook} from './../../../hooks/use-form-hook'
import btn from './../../global/buttons.module.scss'
import {formCopy} from '../../../copy/form'
import {useSettingsContext} from '../../../context/settings-context'

type Props = {
	form: MutableRefObject<HTMLFormElement>
}

export default function AddButton({form}: Props) {
	const {handleForm, btnDisabled, isError, errorMsg} = useFormHook(
		form,
		'/api/add',
		'POST',
		'/items'
	)
	const {lng} = useSettingsContext()
	const lngPath = formCopy?.[lng]

	return (
		<>
			{isError && <p>{errorMsg}</p>}
			<input
				type='submit'
				tabIndex={0}
				value={lngPath.addBtn}
				disabled={btnDisabled}
				className={btn.btnPrimary}
				onClick={(e) => handleForm(e, null)}
			/>
		</>
	)
}
