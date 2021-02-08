import React from 'react'

import {render} from './../test-utils'
import Login from './../../pages/login'

describe('Login Page', () => {
	it('should render form', () => {
		const {getByLabelText, getByText} = render(<Login />)
		const userName = getByLabelText('User Name:', {selector: 'input'})
		const userPassword = getByLabelText('User Password:', {
			selector: 'input',
		})
		const button = getByText('Login', {selector: 'input'})

		expect(userName).toBeInTheDocument()
		expect(userPassword).toBeInTheDocument()
		expect(button).toBeInTheDocument()
	})
})
