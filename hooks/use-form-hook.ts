import {useState} from 'react'
import {useRouter} from 'next/router'

const headers = {'Content-Type': 'application/json'}

export function useFormHook(formRef, fetchUrl, method, redirect) {
	const router = useRouter()
	const [btnDisabled, setBtnDisabled] = useState<boolean>(false)
	const [isError, setError] = useState<boolean>(false)
	const [errorMsg, setErrorMsg] = useState<string>('')

	const handleForm = (e: {preventDefault: () => void}, id) => {
		e.preventDefault()
		setBtnDisabled(true)

		if (method === 'DELETE') {
			fetch(fetchUrl, {
				headers: headers,
				method: method,
				body: JSON.stringify(id),
			}).then((res) => {
				if (res.status === 200) {
					router.push(redirect)
				}
			})
		}

		if (formRef !== null && formRef.current) {
			const formData = new FormData(formRef.current)
			const formValues = Object.fromEntries(formData.entries())
			fetch(fetchUrl, {
				headers: headers,
				method: method,
				body: JSON.stringify(formValues),
			}).then((res) => {
				if (res.status === 203) {
					setError(true)
					setBtnDisabled(false)
					setErrorMsg('All field must be filled!!!')
				}
				if (res.status === 400) {
					setBtnDisabled(false)
					setError(true)
					setErrorMsg('Incorrect credentials!!!')
				}
				if (res.status === 200) {
					formRef.current.reset()
					setBtnDisabled(false)
					setError(false)
					res.json().then(() => {
						router.push(redirect)
					})
				}
			})
		}
	}

	return {
		handleForm,
		btnDisabled,
		isError,
		errorMsg,
	}
}
