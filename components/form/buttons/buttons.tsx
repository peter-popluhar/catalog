import React, {MutableRefObject} from 'react'
import {useFormHook} from '../use-form-hook'
import btn from './../../global/buttons.module.scss'
import buttons from './buttons.module.scss'
import {formCopy} from './../../../copy/form'
import {useLanguageContext} from './../../../context/language-context'

type Props = {
	form: MutableRefObject<HTMLFormElement>
	isEditable: boolean
	id: string
}

export default function Buttons({form, isEditable, id}: Props) {
	const {addItem, btnDisabled, error, updateItem, deleteItem} = useFormHook(
		form
	)
	const {lng} = useLanguageContext()
	const lngPath = formCopy?.[lng]

	return (
		<>
			{error && <p>{lngPath.error}</p>}
			<div className={buttons.wrapper}>
				{isEditable ? (
					<>
						<input type='hidden' name='id' value={id} />
						<button
							onClick={(e) => updateItem(e, id)}
							className={`${btn.btnSuccess} ${btn.btnLg}`}
						>
							{lngPath.updateBtn}
						</button>
						<button
							onClick={(e) => deleteItem(e, id)}
							className={`${btn.btnDelete} ${btn.btnLg}`}
						>
							{lngPath.deleteBtn}
						</button>
					</>
				) : (
					<input
						type='submit'
						value={lngPath.addBtn}
						disabled={btnDisabled}
						className={btn.btnPrimary}
						onClick={addItem}
					/>
				)}
			</div>
		</>
	)
}
