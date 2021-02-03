import {useState} from 'react'

const fetchOptions = {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json',
	},
}

export function useFormHook(formRef) {
	const [btnDisabled, setBtnDisabled] = useState<boolean>(false)
	const [error, setError] = useState<boolean>(false)
	const [, setData] = useState([])

	const handleSubmit = (e: {preventDefault: () => void}) => {
		e.preventDefault()
		setBtnDisabled(true)

		if (formRef.current) {
			const formData = new FormData(formRef.current)
			const formValues = Object.fromEntries(formData.entries())
			const options = {
				...fetchOptions,
				body: JSON.stringify(formValues),
			}
			fetch('/api/add', options).then((res) => {
				if (res.status === 203) {
					setBtnDisabled(false)
					setError(true)
				}
				if (res.status === 200) {
					formRef.current.reset()
					setBtnDisabled(false)
					setError(false)
					res.json().then((data) => {
						setData(data)
					})
				}
			})
		}
	}

	return {
		handleSubmit,
		btnDisabled,
		error,
	}
}
