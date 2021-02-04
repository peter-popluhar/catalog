import React, {createContext, useContext, useState} from 'react'

const LanguageContext = createContext({
	lng: '',
	setLanguage: () => {},
})

export const LanguageProvider = ({children}) => {
	const [lng, setLanguage] = useState('en')

	return (
		<LanguageContext.Provider value={{lng, setLanguage}}>
			{children}
		</LanguageContext.Provider>
	)
}

export const useLanguageContext = () => useContext(LanguageContext)
