import React from 'react'
import {MediaObjectType} from '../../types/media-object-type'
import FormField from './form-field'
import {formCopy} from '../../copy/form'

type Props = {
	data?: MediaObjectType
	isEditable?: boolean
	lng: string
}

export default function Fieldset({data, lng}: Props) {
	const lngPath = formCopy?.[lng]

	return (
		<fieldset>
			<legend className='text--lg'>{lngPath.language}</legend>
			<FormField
				label={lngPath.productName}
				inputType='text'
				name='name'
				defaultValue={data ? data.name : ''}
				hasFocus
			/>

			<FormField
				label={lngPath.productLabel}
				inputType='text'
				name='labelContent'
				defaultValue={data ? data.labelContent : ''}
			/>

			<FormField
				label={lngPath.productCategories}
				inputType='text'
				name='categories'
				defaultValue={data ? data.categories : ''}
			/>

			<FormField
				label={lngPath.productDescription}
				inputType='area'
				name='description'
				defaultValue={data ? data.description : ''}
			/>

			<FormField
				label='Product Price'
				inputType='number'
				name='price'
				currency={lngPath.currency}
				defaultValue={data ? data.price : ''}
			/>
		</fieldset>
	)
}
