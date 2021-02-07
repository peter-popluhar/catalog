export function isEmptyFieldValidator(obj: {[x: string]: string}) {
	for (const key in obj) {
		if (obj[key] === '') {
			return true
		}
	}

	return false
}
