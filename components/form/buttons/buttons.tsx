import React, {MutableRefObject} from 'react'
import {useFormHook} from '../use-form-hook'
import btn from './../../global/buttons.module.scss'
import buttons from './buttons.module.scss'

type Props = {
	form: MutableRefObject<HTMLFormElement>
	isEditable: boolean
	id: string
}

export default function Buttons({form, isEditable, id}: Props) {
	const {addItem, btnDisabled, error, updateItem, deleteItem} = useFormHook(
		form
	)

	return (
		<div className={buttons.wrapper}>
			{error && <p>all fields must be filled !!!</p>}

			{isEditable ? (
				<>
					<input type='hidden' name='id' value={id} />
					<button
						onClick={(e) => updateItem(e, id)}
						className={`${btn.btnSuccess} ${btn.btnLg}`}
					>
						Update
					</button>
					<button
						onClick={(e) => deleteItem(e, id)}
						className={`${btn.btnDelete} ${btn.btnLg}`}
					>
						Delete
					</button>
				</>
			) : (
				<input
					type='submit'
					value='add item'
					disabled={btnDisabled}
					className={btn.btnPrimary}
					onClick={addItem}
				/>
			)}
		</div>
	)
}
