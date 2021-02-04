import {useState} from 'react'
import {useRouter} from 'next/router'

const fetchOptions = {
	headers: {
		'Content-Type': 'application/json',
	},
}

export function useFormHook(formRef) {
	const router = useRouter()
	const [btnDisabled, setBtnDisabled] = useState<boolean>(false)
	const [error, setError] = useState<boolean>(false)

	const addItem = (e: {preventDefault: () => void}) => {
		e.preventDefault()
		setBtnDisabled(true)

		if (formRef.current) {
			const formData = new FormData(formRef.current)
			const formValues = Object.fromEntries(formData.entries())
			const options = {
				...fetchOptions,
				method: 'POST',
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
					res.json().then(() => {
						router.push('/items')
					})
				}
			})
		}
	}

	const updateItem = (e: {preventDefault: () => void}, id) => {
		e.preventDefault()
		setBtnDisabled(true)

		if (formRef.current) {
			const formData = new FormData(formRef.current)
			const formValues = Object.fromEntries(formData.entries())
			const options = {
				...fetchOptions,
				method: 'PUT',
				body: JSON.stringify(formValues),
			}
			fetch('/api/update', options).then((res) => {
				if (res.status === 203) {
					setBtnDisabled(false)
					setError(true)
				}
				if (res.status === 200) {
					formRef.current.reset()
					setBtnDisabled(false)
					setError(false)
					res.json().then((id) => {
						router.push(`/items/${id}`)
					})
				}
			})
		}
	}

	const deleteItem = (e: {preventDefault: () => void}, id) => {
		e.preventDefault()
		const options = {
			...fetchOptions,
			method: 'DELETE',
			body: JSON.stringify(id),
		}

		fetch('/api/delete', options).then((res) => {
			if (res.status === 200) {
				router.push('/items')
			}
		})
	}

	return {
		addItem,
		btnDisabled,
		error,
		updateItem,
		deleteItem,
	}
}
