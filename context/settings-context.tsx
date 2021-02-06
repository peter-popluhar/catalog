import React, {createContext, useContext, useState} from 'react'

const SettingsContext = createContext({
	theme: '',
	setTheme: (theme) => {
		//
	},
	layout: '',
	setLayout: (layout) => {
		//
	},
	lng: '',
	setLanguage: (lng) => {
		//
	},
})

export const SettingsProvider = ({children}) => {
	const [theme, setTheme] = useState('light')
	const [layout, setLayout] = useState('detail')
	const [lng, setLanguage] = useState('en')

	return (
		<SettingsContext.Provider
			value={{theme, setTheme, layout, setLayout, lng, setLanguage}}
		>
			{children}
		</SettingsContext.Provider>
	)
}

export const useSettingsContext = () => useContext(SettingsContext)
