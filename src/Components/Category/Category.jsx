import React from 'react'
import './Category.scss'

export const Category = () => {
	return (
		<section className='category'>
			<div className='category__inner'>
				<div className='container'>
					<h2 className='category__heading category__heading hidden'>
						Категория товаров
					</h2>
					<div className='category__items'>
						<div className='category__item-wrap'>
							<div className='category__item category__item-women'>
								<p className='category__text'>30% OFF</p>
								<h3 className='category__title'>FOR WOMEN</h3>
							</div>
						</div>
						<div className='category__item-wrap'>
							<div className='category__item category__item-men'>
								<p className='category__text'>HOT DEAL</p>
								<h3 className='category__title'>FOR MEN</h3>
							</div>
						</div>
						<div className='category__item-wrap'>
							<div className='category__item category__item-kids'>
								<p className='category__text'>NEW ARRIVALS</p>
								<h3 className='category__title'>FOR KIDS</h3>
							</div>
						</div>
						<div className='category__item-wrap category__item-wrap--item-accesories'>
							<div className='category__item category__item-accesories'>
								<p className='category__text'>LUXIROUS & TRENDY</p>
								<h3 className='category__title'>ACCESORIES</h3>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
