import React from 'react'
import './Preview.scss'

export const Preview = () => {
	return (
		<section className='preview'>
			<div className='preview__inner'>
				<video
					className='preview__video'
					src='media/Time_Lapse.mp4'
					autoplay
					muted
					loop
				></video>
				<div className='preview__content container'>
					<div className='preview__img'></div>
					<div className='preview__heading-title'>
						<h1 className='preview__title'>
							The brand
							<span className='preview__desc'> of luxerious</span>
							<span className='preview__desc preview__desc--pink'>fashion</span>
						</h1>
					</div>
				</div>
			</div>
		</section>
	)
}
