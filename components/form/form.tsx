import React, {useRef, useEffect} from 'react'
import {useFormHook} from './use-form-hook'
import styles from './form.module.scss'
import input from './../global/input.module.scss'
import label from './../global/label.module.scss'
import field from './../global/field.module.scss'
import btn from './../global/buttons.module.scss'
import grid from './../global/grid.module.scss'
import {MediaObjectType} from './../../types/media-object-type'

type Props = {
	data: MediaObjectType
	isEditable?: boolean
}

export default function Form({data, isEditable}: Props) {
	const form = useRef<HTMLFormElement | null>()
	const inputFocus = useRef<HTMLInputElement | null>()
	const {addItem, btnDisabled, error, updateItem, deleteItem} = useFormHook(
		form
	)

	useEffect(() => {
		inputFocus.current.focus()
	}, [])

	return (
		<div className={styles.wrapper}>
			<form ref={form}>
				<div className={grid.grid}>
					<fieldset>
						<legend className='text--lg'>English</legend>
						<div className={field.field}>
							<label className={`text--sm ${label.label}`} htmlFor='name'>
								Product Name:
							</label>
							<input
								type='text'
								name='name'
								id='name'
								className={input.input}
								required
								ref={inputFocus}
								defaultValue={data ? data.name : ''}
							/>
						</div>
						<div className={field.field}>
							<label className={`text--sm ${label.label}`} htmlFor='label'>
								Product Label:
							</label>
							<input
								type='text'
								name='labelContent'
								id='label'
								className={input.input}
								required
								defaultValue={data ? data.labelContent : ''}
							/>
						</div>
						<div className={field.field}>
							<label className={`text--sm ${label.label}`} htmlFor='categories'>
								Product Categories:
							</label>
							<input
								type='text'
								name='categories'
								id='categories'
								className={input.input}
								required
								defaultValue={data ? data.categories : ''}
							/>
						</div>
						<div className={field.field}>
							<label
								className={`text--sm ${label.label}`}
								htmlFor='description'
							>
								Product Description:
							</label>
							<textarea
								name='description'
								id='description'
								className={`${input.input} ${input.area}`}
								required
								defaultValue={data ? data.description : ''}
							></textarea>
						</div>
						<div className={field.field}>
							<label className={`text--sm ${label.label}`} htmlFor='price'>
								Product Price:
							</label>
							<input
								type='number'
								name='price'
								id='price'
								className={input.input}
								required
								defaultValue={data ? data.price : ''}
							/>
						</div>
					</fieldset>
				</div>

				{error && <p className={field.field}>all fields must be filled !!!</p>}

				{isEditable && data ? (
					<>
						<input type='hidden' name='id' value={data ? data._id : ''} />
						<button
							onClick={(e) => updateItem(e, data._id)}
							className={`${btn.btnSuccess} ${btn.btnLg}`}
						>
							Update
						</button>
						<button
							onClick={(e) => deleteItem(e, data._id)}
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
			</form>
		</div>
	)
}
