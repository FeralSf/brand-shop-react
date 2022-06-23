import React from 'react'
import './Feature.scss'
import imageIcon1 from '../../img/icon-1.svg'
import imageIcon2 from '../../img/icon-2.svg'
import imageIcon3 from '../../img/icon-3.svg'

export const Feature = () => {
	return (
		<section className='feature'>
			<div className='feature__inner'>
				<div className='container'>
					<div className='feature__items'>
						<figure className='feature__item'>
							<img className='feature__img' src={imageIcon1} alt='icon' />
							<figcaption>
								<h4 className='feature__title'>Free Delivery</h4>
								<p className='feature__desc'>
									Worldwide delivery on all. Authorit tively morph
									next-generation innov tion with extensive models.
								</p>
							</figcaption>
						</figure>
						<figure className='feature__item'>
							<img className='feature__img' src={imageIcon2} alt='icon' />
							<figcaption>
								<h4 className='feature__title'>Sales & discounts</h4>
								<p className='feature__desc'>
									Worldwide delivery on all. Authorit tively morph
									next-generation innov tion with extensive models.
								</p>
							</figcaption>
						</figure>
						<figure className='feature__item'>
							<img className='feature__img' src={imageIcon3} alt='icon' />
							<figcaption>
								<h4 className='feature__title'>Quality assurance</h4>
								<p className='feature__desc'>
									Worldwide delivery on all. Authorit tively morph
									next-generation innov tion with extensive models.
								</p>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</section>
	)
}
