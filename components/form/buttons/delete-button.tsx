import {MutableRefObject} from 'react'
import {useFormHook} from '../use-form-hook'
import btn from './../../global/buttons.module.scss'
import {formCopy} from '../../../copy/form'
import {useSettingsContext} from '../../../context/settings-context'

type Props = {
	form: MutableRefObject<HTMLFormElement>
	id: string
}

export default function DeleteButton({id, form}: Props) {
	const {handleForm} = useFormHook(form, '/api/delete', 'DELETE', '/items')
	const {lng} = useSettingsContext()
	const lngPath = formCopy?.[lng]

	return (
		<div>
			<button
				tabIndex={0}
				onClick={(e) => handleForm(e, id)}
				className={`${btn.btnDelete} ${btn.btnLg}`}
			>
				{lngPath.deleteBtn}
			</button>
		</div>
	)
}
