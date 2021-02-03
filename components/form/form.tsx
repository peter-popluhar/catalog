import React, {useRef} from 'react'
import {useFormHook} from './use-form-hook'

export default function Form() {
	const form = useRef<HTMLFormElement | null>()
	const {handleSubmit, btnDisabled, error} = useFormHook(form)

	return (
		<form ref={form} onSubmit={handleSubmit}>
			{error && 'all fields must be filled !!!'}
			<br />
			<label htmlFor='label-content'>Label:</label>
			<input type='text' id='label-content' name='labelContent' />
			<br />
			<label htmlFor='name'>Name:</label>
			<input type='text' id='name' name='name' />
			<br />
			<label htmlFor='flags'>Flags:</label>
			<input type='flags' id='flags' name='flags' />
			<br />
			<label htmlFor='description'>Description:</label>
			<input type='description' id='description' name='description' />
			<br />
			<label htmlFor='price'>Price:</label>
			<input type='price' id='price' name='price' />
			<br />
			<input type='submit' value='add item' disabled={btnDisabled} />
		</form>
	)
}
