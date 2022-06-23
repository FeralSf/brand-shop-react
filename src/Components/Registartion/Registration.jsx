import React from 'react'
import './Registration.scss'

export const Registration = () => {
	return (
		<section className='registration'>
			<div className='container'>
				<div className='registration__inner'>
					<form className='form registration__form' action='#'>
						<div className='form__inner registration__inner--wide'>
							<p className='form__text'>Your Name</p>
							<input
								className='form__field'
								type='text'
								placeholder='First Name'
								required
							/>
							<input
								className='form__field'
								type='text'
								placeholder='Last Name'
								required
							/>
							<div className='form__fields'>
								<label>
									<input
										className='form__select'
										type='radio'
										name='gender'
										required
									/>
									Male
								</label>
								<label>
									<input
										className='form__select'
										type='radio'
										name='gender'
										required
									/>
									Female
								</label>
							</div>
							<p className='form__text'>Login details</p>
							<input
								className='form__field'
								placeholder='Email'
								type='email'
								required
							/>
							<input
								className='form__field'
								placeholder='Password'
								type='password'
								required
							/>
							<p className='form__desc'>
								Please use 8 or more characters, with at least 1 number and a
								mixture of uppercase and lowercase letters
							</p>
							<button
								className='sub-content__btn registration__btn'
								type='submit'
							>
								JOIN NOW
								<i className='registration__arrow-btn fas fa-arrow-right'></i>
							</button>
						</div>
					</form>
					<div className='registration__right-side'>
						<h2 className='registration__title'>LOYALTY HAS ITS PERKS</h2>
						<p className='registration__text'>
							Get in on the loyalty program where you can earn points and unlock
							serious perks. Starting with these as soon as you join:
						</p>
						<ul className='registration__list'>
							<li className='registration__item'>15% off welcome offer</li>
							<li className='registration__item'>
								Free shipping, returns and exchanges on all orders
							</li>
							<li className='registration__item'>
								$10 off a purchase on your birthday
							</li>
							<li className='registration__item'>Early access to products</li>
							<li className='registration__item'>Exclusive offers & rewards</li>
						</ul>
					</div>
				</div>
			</div>
		</section>
	)
}
