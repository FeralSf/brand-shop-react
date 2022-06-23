import React from 'react'
import { Breadcrumb } from '../../Components/Breadcrumb'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { Registration } from '../../Components/Registartion'

export const RegistrationPage = () => {
	return (
		<>
			<Header />
			<Breadcrumb />

			<Registration />
			<Footer />
		</>
	)
}
