import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import './Products.scss'
// import image1 from '../../img/fe-card-1.jpg'
// import image2 from '../../img/fe-card-2.jpg'
// import image3 from '../../img/fe-card-3.jpg'
// import image4 from '../../img/fe-card-4.jpg'
// import image5 from '../../img/fe-card-5.jpg'
// import image6 from '../../img/fe-card-6.jpg'
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
	// const [data, setData] = useState([])

	// useEffect(() => {
	// 	const unsub = onSnapshot(collection(db, 'products'), snapShot => {
	// 		let list = []
	// 		snapShot.docs.forEach(doc => {
	// 			list.push({ id: doc.id, ...doc.data() })
	// 		})
	// 		setData(list)
	// 	})
	// 	return () => {
	// 		unsub()
	// 	}
	// }, [])

	return (
		<section className='products'>
			<div className='products__inner'>
				<div className='container'>
					{/* <h2 className='products__main-title'>Fetured Items</h2>
					<p className='products__description'>
						Shop for items based on what we featured in this week
					</p> */}
					<div className='products__items'>
						{products.map(pr => (
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
												className='products__icon-cart'
												src={imageCart}
												alt='icon-cart'
											/>
											Add to Cart
										</button>
									</div>
								</div>
								<div className='products__content-title'>
									<h3 className='products__title'>{pr.title}</h3>
									<p className='products__descr'>{pr.description}</p>
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

//  <img
// src={require('../../../assets/images/website/homepage/' +
//   item.image +
//   '.png')}
// className="img-fluid"
// alt={item.title}

/* <div className='products__items'>
						<article className='products__item'>
							<div className='products__img'>
								<img
									className='products__img-card'
									src={image1}
									alt='product'
								/>
								<div className='products__overlay'>
									<button className='products__btn'>
										<img
											className='products__icon-cart'
										src={imageCart}
											alt='icon-cart'
										/>
										Add to Cart
									</button>
								</div>
							</div>
							<div className='products__content-title'>
								<h3 className='products__title'>ELLERY X M'O CAPSULE</h3>
								<p className='products__descr'>
									Known for her sculptural takes on traditional tailoring,
									Australian arbiter of cool Kym Ellery teams up with Moda
									Operandi.
								</p>
								<span className='products__price'>$52.00</span>
							</div>
						</article> </div> */
