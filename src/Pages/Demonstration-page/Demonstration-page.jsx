import React from 'react'
import { Header } from '../../Components/Header'
import { Demonstration } from '../../Components/Demonstration'
import { Footer } from '../../Components/Footer'
import { Breadcrumb } from '../../Components/Breadcrumb'
import { Products } from '../../Components/Products'
import { Feature } from '../../Components/Feature'
import Slider from '../../Components/Slider/Slider'

export const DemonstrationPage = () => {
	return (
		<>
			<Header />
			<Breadcrumb />
			<Slider />
			{/* <Demonstration /> */}
			<Products />
			<Feature />
			<Footer />
		</>
	)
}
