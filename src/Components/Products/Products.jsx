import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import './Products.scss'
import imageCart from '../../img/cart.svg'
import {
	collection,
	getDocs,
	deleteDoc,
	doc,
	onSnapshot,
} from 'firebase/firestore'
import { db } from '../../Services/firebase/firebase'

export const Products = () => {
	const products = useSelector(state => state.productsSlice.products)
	const [value, setValue] = useState('')
	// const [data, setData] = useState([])

	const filtered = products.filter(product => {
		return product.title.toLowerCase().includes(value.toLocaleLowerCase())
	})

	return (
		<section className='products'>
			<form action=''>
				<input
					type='text'
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
			</form>
			<div className='products__inner'>
				<div className='container'>
					<h2 className='products__main-title'>Fetured Items</h2>
					<p className='products__description'>
						Shop for items based on what we featured in this week
					</p>
					<div className='products__items'>
						{filtered.map(pr => (
							<div key={pr.id} className='products__item'>
								<div className='products__img'>
									<img
										className='products__img-card'
										src={pr.img}
										alt={pr.title}
									/>
									<div className='products__overlay'>
										<button className='products__btn'>
											<img
												width='32'
												height='29'
												className='products__icon-cart'
												src={imageCart}
												alt='icon-cart'
											/>
											Add to Cart
										</button>
									</div>
								</div>
								<div className='products__content-title'>
									<h3 className='products__title'> {pr.title}</h3>
									<p className='products__descr'>Описаниее{pr.descritpion}</p>
									<span className='products__price'>{pr.price}$</span>
								</div>
							</div>
						))}
					</div>
					<a
						className='product-info__link--white btn product-info__btn product-info__btn--white-text'
						href='catalog'
					>
						Browse All Product
					</a>
				</div>
			</div>
		</section>
	)
}
