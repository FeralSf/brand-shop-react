import React from 'react'
import { Header } from '../../Components/Header'
import { Footer } from '../../Components/Footer'
import { Products } from '../../Components/Products'
import { Catalog } from '../../Components/Catalog'
import { Pagination } from '../../Components/Pagination'
import { Feature } from '../../Components/Feature'
import { Breadcrumb } from '../../Components/Breadcrumb'

export const CatalogPage = () => {
	return (
		<>
			<Header />
			<Breadcrumb />
			<Catalog />
			<Products />
			<Pagination />
			<Feature />
			<Footer />
		</>
	)
}
