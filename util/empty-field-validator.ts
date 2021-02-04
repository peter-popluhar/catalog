export function isEmptyFieldValidator(obj) {
	for (const key in obj) {
		if (obj[key] === '') {
			return true
		}
	}

	return false
}