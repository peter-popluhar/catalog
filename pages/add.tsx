import Head from 'next/head'
import Form from './../components/form'
import MastHead from './../components/masthead'
import {addCopy} from './../copy/add'

export default function Add() {
	const lng = 'en'
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
