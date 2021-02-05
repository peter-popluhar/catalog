import {MutableRefObject} from 'react'
import {useFormHook} from '../use-form-hook'
import btn from './../../global/buttons.module.scss'
import {formCopy} from '../../../copy/form'
import {useSettingsContext} from '../../../context/settings-context'

type Props = {
	form: MutableRefObject<HTMLFormElement>
}

export default function AddButton({form}: Props) {
	const {handleItem, btnDisabled, error} = useFormHook(
		form,
		'/api/add',
		'POST',
		'/items'
	)
	const {lng} = useSettingsContext()
	const lngPath = formCopy?.[lng]

	return (
		<>
			{error && <p>{lngPath.error}</p>}
			<input
				type='submit'
				value={lngPath.addBtn}
				disabled={btnDisabled}
				className={btn.btnPrimary}
				onClick={(e) => handleItem(e, null)}
			/>
		</>
	)
}
