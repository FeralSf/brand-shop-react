import React from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes } from 'react-router-dom'
import { AddProduct } from '../Pages/AddProduct/AddProduct'
import { CartPage } from '../Pages/Cart-page'
import { CatalogPage } from '../Pages/Catalog-page'
import { DemonstrationPage } from '../Pages/Demonstration-page'
import { HomePage } from '../Pages/Home-page'
import { RegistrationPage } from '../Pages/Registration-page/Registration'

export const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/home' element={<HomePage />} />
				<Route path='/cart' element={<CartPage />} />
				<Route path='/catalog' element={<CatalogPage />} />
				<Route path='/registration' element={<RegistrationPage />} />
				<Route path='/demonstration' element={<DemonstrationPage />} />
				<Route path='/add' element={<AddProduct />} />

				<Route
					path='*'
					element={
						<Link to='home'>
							<div>
								<div> </div>
								<div style={{ fontSize: 80, marginTop: 200 }}>
									|| CLICK HERE ||
								</div>
							</div>
						</Link>
					}
				/>
			</Routes>
		</BrowserRouter>
	)
}
