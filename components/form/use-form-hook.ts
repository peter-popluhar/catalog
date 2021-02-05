import {useState} from 'react'
import {useRouter} from 'next/router'

const headers = {'Content-Type': 'application/json'}

export function useFormHook(formRef, fetchUrl, method, routerUrl) {
	const router = useRouter()
	const [btnDisabled, setBtnDisabled] = useState<boolean>(false)
	const [error, setError] = useState<boolean>(false)

	const handleItem = (e: {preventDefault: () => void}, id) => {
		e.preventDefault()
		setBtnDisabled(true)

		if (method === 'DELETE') {
			fetch(fetchUrl, {
				headers: headers,
				method: method,
				body: JSON.stringify(id),
			}).then((res) => {
				if (res.status === 200) {
					router.push(routerUrl)
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
					setBtnDisabled(false)
					setError(true)
				}
				if (res.status === 200) {
					formRef.current.reset()
					setBtnDisabled(false)
					setError(false)
					res.json().then(() => {
						router.push(routerUrl)
					})
				}
			})
		}
	}

	return {
		handleItem,
		btnDisabled,
		error,
	}
}
