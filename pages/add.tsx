import Head from 'next/head'
import Form from './../components/form'
import MastHead from './../components/masthead'
import {addCopy} from './../copy/add'
import {useSettingsContext} from './../context/settings-context'

export default function Add() {
	const {lng} = useSettingsContext()
	const lngPath = addCopy?.[lng]

	return (
		<>
			<Head>
				<title>Add Item</title>
			</Head>
			<main>
				<MastHead title={lngPath.title} />
				<Form />
			</main>
		</>
	)
}
