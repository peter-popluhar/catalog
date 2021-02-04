import Head from 'next/head'
import Form from './../components/form'
import MastHead from './../components/masthead'

export default function Add() {
	return (
		<>
			<Head>
				<title>Add Item</title>
			</Head>
			<main>
				<MastHead title='Add item to catalog' />
				<Form />
			</main>
		</>
	)
}
