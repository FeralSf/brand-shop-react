import React from 'react'
import './Header.scss'
import imageClose from '../../img/close.svg'
import imageLogo from '../../img/logo.svg'
import imageSearch from '../../img/search.svg'
import imageCart from '../../img/cart.svg'
import imageSocial from '../../img/social.svg'

export const Header = () => {
	return (
		<header className='header'>
			<nav className='header__menu-content'>
				<img className='header__close' src={imageClose} alt='close' />
				<p className='header__title'>MENU</p>
				<ul className='header__menu-list'>
					<li className='header__sub-title'>MAN</li>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='https://yandex.ru/'>
							Accessories
						</a>
					</li>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='#'>
							Poslání, cíle, fakta
						</a>
					</li>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='#'>
							Denim
						</a>
					</li>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='#'>
							T-Shirts
						</a>
					</li>
				</ul>
				class
				<p className='header__sub-title'>WOMAN</p>
				<ul className='header__menu-list'>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='#'>
							Accessories
						</a>
					</li>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='#'>
							Jackets & Coats
						</a>
					</li>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='#'>
							Polos
						</a>
					</li>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='#'>
							T-Shirts
						</a>
					</li>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='#'>
							Shirts
						</a>
					</li>
				</ul>
				<p className='header__sub-title'>KIDS</p>
				<ul className='header__menu-list'>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='#'>
							Accessories
						</a>
					</li>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='#'>
							Jackets & Coats
						</a>
					</li>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='#'>
							Polos
						</a>
					</li>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='#'>
							T-Shirts
						</a>
					</li>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='#'>
							Shirts
						</a>
					</li>
					<li className='header__menu-item'>
						{' '}
						<a className='header__menu-link' href='#'>
							Shirts
						</a>
					</li>
				</ul>
			</nav>
			<div className='header__inner'>
				<div className='container'>
					<div className='header__topline'>
						<div className='header__topline-left'>
							<a className='logo' href='home'>
								<img className='header__logo' src={imageLogo} alt='logo' />
							</a>
							<button className='header__search-btn'>
								<a href='demonstration'>
									<img
										className='header__search-img'
										src={imageSearch}
										alt='search'
									/>
								</a>
							</button>
							<form className='header__search' action='form'>
								<input
									className='header__search-field'
									type='search'
									placeholder='Search....'
								/>
							</form>
						</div>
						<div className='header__topline-right'>
							<button className='header__menu'>
								<span className='header__menu-line'></span>
								<span className='header__menu-line'></span>
								<span className='header__menu-line'></span>
							</button>
							<a className='header__topline-right-link' href='registration'>
								<img
									className='header__topline-img'
									src={imageSocial}
									alt='social'
								/>
							</a>
							<a className='header__topline-right-link' href='cart'>
								<img src={imageCart} alt='cart' className='cart' />
								<div className='header__topline-right-count'>0</div>
							</a>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}
