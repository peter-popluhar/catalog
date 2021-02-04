import React, {useEffect, useRef} from 'react'
import formField from './form-field.module.scss'
import formLabel from './form-label.module.scss'
import input from './input.module.scss'

type Props = {
	label: string
	inputType: string
	defaultValue: string | number
	name: string
	hasFocus?: boolean
	currency?: string
}

export default function FormField({
	label,
	inputType,
	defaultValue,
	name,
	hasFocus,
	currency,
}: Props) {
	const inputFocus = useRef<HTMLInputElement | null>()

	useEffect(() => {
		if (inputFocus.current) {
			inputFocus.current.focus()
		}
	}, [])

	return (
		<div className={formField.field}>
			<label>
				<span className={`text--sm ${formLabel.formLabel}`}>{label}:</span>
				{inputType === 'area' ? (
					<textarea
						name={name}
						className={`${input.input} ${input.area}`}
						required
						defaultValue={defaultValue}
					></textarea>
				) : (
					<>
						<input
							type={inputType}
							name={name}
							className={input.input}
							required
							ref={hasFocus && inputFocus}
							defaultValue={defaultValue}
						/>

						{currency && (
							<span className={`text--sm ${formLabel.formLabel}`}>
								{currency}
							</span>
						)}
					</>
				)}
			</label>
		</div>
	)
}
