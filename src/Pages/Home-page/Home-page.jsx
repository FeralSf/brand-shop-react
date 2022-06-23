import React from 'react'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { Feature } from '../../Components/Feature'
import { Preview } from '../../Components/Preview'
import { Category } from '../../Components/Category'
import { Products } from '../../Components/Products'

export const HomePage = () => {
	return (
		<>
			<Header />
			<Preview />
			<Category />
			<Products />
			<Feature />
			<Footer />
		</>
	)
}
