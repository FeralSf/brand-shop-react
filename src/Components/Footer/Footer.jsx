import React from 'react'
import './Footer.scss'
import imageInter from '../../img/intersect.png'

export const Footer = () => {
	return (
		<footer className='footer'>
			<div className='footer__inner'>
				<div className='white-overlay'></div>
				<div className='footer__items container'>
					<figure className='footer__item'>
						<img src={imageInter} alt='sub-img' />
						<figcaption>
							<p className='footer__quote'>
								“Vestibulum quis porttitor dui! Quisque viverra nunc mi,{' '}
								<i>a pulvinar purus condimentum“</i>
							</p>
						</figcaption>
					</figure>
					<div className='footer__item footer__contact'>
						<h5 className='footer__title'>SUBSCRIBE</h5>
						<p className='footer__descr'>FOR OUR NEWLETTER AND PROMOTION</p>
						<div className='footer__send'>
							<input
								className='footer__input'
								type='email'
								placeholder='Enter Your Email'
								required
							/>
							<input className='footer__btn' type='submit' value='Subscribe' />
						</div>
					</div>
				</div>
			</div>
			<div className='bottom-line'>
				<div className='bottom-line__inner'>
					<div className='container'>
						<div className='bottom-line__wrapper'>
							<p className='bottom-line__copyright'>
								© 2021 Brand All Rights Reserved.
							</p>
							<div className='bottom-line__socials'>
								<ul className='bottom-line__socials-icons'>
									<li className='bottom-line__item'>
										<a
											className='bottom-line__social-link'
											href='https://www.npmjs.com/package/@fortawesome/react-fontawesome'
										>
											<i className='bottom-line__icon fab fa-facebook-f'></i>
										</a>
									</li>
									<li className='bottom-line__item'>
										<a className='bottom-line__social-link' href='#'>
											<i className='bottom-line__icon fab fa-instagram'></i>
										</a>
									</li>
									<li className='bottom-line__item'>
										<a className='bottom-line__social-link' href='#'>
											<i className='bottom-line__icon fab fa-pinterest-p'></i>
										</a>
									</li>
									<li className='bottom-line__item'>
										<a className='bottom-line__social-link' href='#'>
											<i className='bottom-line__icon fab fa-twitter'></i>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
