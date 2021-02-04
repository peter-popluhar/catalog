import Head from 'next/head'
import Form from './../components/form'
import MastHead from './../components/masthead'
import {addCopy} from './../copy/add'
import {useLanguageContext} from './../context/language-context'

export default function Add() {
	const {lng} = useLanguageContext()
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
