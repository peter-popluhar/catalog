import Head from 'next/head'
import Form from './../components/form'

export default function Add() {
	return (
		<>
			<Head>
				<title>Add Item</title>
			</Head>
			<main>
				<h1>Add item to catalog</h1>
				<Form />
			</main>
		</>
	)
}
