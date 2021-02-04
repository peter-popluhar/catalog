import styles from './editable.module.scss'
import Form from './../form'

export default function Editable({data, isEditable}) {
	return (
		<div>
			<Form data={data} isEditable={isEditable} />
		</div>
	)
}
