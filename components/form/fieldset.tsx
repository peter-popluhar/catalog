import React from 'react'
import {MediaObjectType} from '../../types/media-object-type'
import FormField from './form-field'
import {formCopy} from '../../copy/form'

type Props = {
	data?: MediaObjectType
	isEditable?: boolean
	lng?: string
	focus?: boolean
}

export default function Fieldset({data, lng, focus}: Props) {
	const lngPath = formCopy?.[lng]

	return (
		<fieldset>
			<legend className='text--lg'>{lngPath.language}</legend>
			<FormField
				label={lngPath.productName}
				inputType='text'
				name={`${lng}Name`}
				defaultValue={data ? (lng === 'en' ? data.enName : data.swName) : ''}
				hasFocus={focus}
			/>

			<FormField
				label={lngPath.productLabel}
				inputType='text'
				name={`${lng}LabelContent`}
				defaultValue={
					data ? (lng === 'en' ? data.enLabelContent : data.swLabelContent) : ''
				}
			/>

			<FormField
				label={lngPath.productCategories}
				inputType='text'
				name={`${lng}Categories`}
				defaultValue={
					data ? (lng === 'en' ? data.enCategories : data.swCategories) : ''
				}
			/>

			<FormField
				label={lngPath.productDescription}
				inputType='area'
				name={`${lng}Description`}
				defaultValue={
					data ? (lng === 'en' ? data.enDescription : data.swDescription) : ''
				}
			/>

			<FormField
				label='Product Price'
				inputType='number'
				name={`${lng}Price`}
				currency={lngPath.currency}
				defaultValue={data ? (lng === 'en' ? data.enPrice : data.swPrice) : ''}
			/>
		</fieldset>
	)
}
