import React, {useRef} from 'react'
import styles from './form.module.scss'
import grid from './../global/grid.module.scss'
import {MediaObjectType} from './../../types/media-object-type'
import FormField from './form-field'
import Buttons from './buttons'

type Props = {
	data?: MediaObjectType
	isEditable?: boolean
}

export default function Form({data, isEditable}: Props) {
	const form = useRef<HTMLFormElement | null>()

	return (
		<div className={styles.wrapper}>
			<form ref={form}>
				<div className={grid.grid}>
					<fieldset>
						<legend className='text--lg'>English</legend>
						<FormField
							label='Product Name'
							inputType='text'
							name='name'
							defaultValue={data ? data.name : ''}
							hasFocus
						/>

						<FormField
							label='Product Label'
							inputType='text'
							name='labelContent'
							defaultValue={data ? data.labelContent : ''}
						/>

						<FormField
							label='Product Categories'
							inputType='text'
							name='categories'
							defaultValue={data ? data.categories : ''}
						/>

						<FormField
							label='Product Description'
							inputType='area'
							name='description'
							defaultValue={data ? data.description : ''}
						/>

						<FormField
							label='Product Price'
							inputType='number'
							name='price'
							defaultValue={data ? data.price : ''}
						/>
					</fieldset>
				</div>

				{isEditable && data && (
					<input type='hidden' name='id' value={data ? data._id : ''} />
				)}

				<Buttons
					form={form}
					isEditable={isEditable}
					id={data ? data._id : null}
				/>
			</form>
		</div>
	)
}
