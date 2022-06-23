import React from 'react'
import './Breadcrumb'

export const Breadcrumb = () => {
	return (
		<section className='breadcrumb'>
			<div className='container'>
				<div className='breadcrumb__content'>
					<h1 className='breadcrumb__title'>NEW ARRIVALS</h1>
					<div className='breadcrumb__links'>
						<a className='breadcrumb__link' href='#'>
							HOME
						</a>
						<a className='breadcrumb__link' href='#'>
							MEN
						</a>
						<a className='breadcrumb__link breadcrumb__link--active' href='#'>
							NEW ARRIVALS
						</a>
					</div>
				</div>
			</div>
		</section>
	)
}
