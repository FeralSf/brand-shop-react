import React, { Component } from 'react'
import Slider from 'react-slick'
import './Slider.scss'
import { Demonstration } from '../Demonstration'
import slimg from '../../img/Image-slide.jpg'
import slimg2 from '../../img/Image-slide1.jpg'
import slimg3 from '../../img/Image-slide3.jpg'
import slimg4 from '../../img/Image-slide4.jpg'
import slimg5 from '../../img/Image-slide5.jpg'
import slimg6 from '../../img/Image-slide6.jpg'

// const collection = [{}]

function SampleNextArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', background: 'red' }}
			onClick={onClick}
		/>
	)
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props
	return (
		<div
			className={className}
			style={{ ...style, display: 'block', background: 'green' }}
			onClick={onClick}
		/>
	)
}

class SimpleSlider extends Component {
	render() {
		const settings = {
			dots: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
			nextArrow: <SampleNextArrow />,
			prevArrow: <SamplePrevArrow />,
		}
		return (
			<div>
				<Slider {...settings}>
					<div className='slider'>
						<div>
							<SampleNextArrow style={{ zIndex: 999 }} />
							<img className='slider__img' src={slimg} />
							<Demonstration
								infoTitle={'title1'}
								infoText={'text'}
								infoDesc={'desc'}
								infoPrice={'price'}
							/>
							<SamplePrevArrow style={{ zIndex: 999 }} />
						</div>
					</div>
					<div>
						<img className='slider__img' src={slimg2} />
						<Demonstration
							infoTitle={'title2'}
							infoText={'text'}
							infoDesc={'desc'}
							infoPrice={'price'}
						/>
					</div>
					<div>
						<img className='slider__img' src={slimg3} />
						<Demonstration
							infoTitle={'title3'}
							infoText={'text'}
							infoDesc={'desc'}
							infoPrice={'price'}
						/>
					</div>
					<div>
						<img className='slider__img' src={slimg4} />
						<Demonstration
							infoTitle={'title4'}
							infoText={'text'}
							infoDesc={'desc'}
							infoPrice={'price'}
						/>
					</div>
					<div>
						<img className='slider__img' src={slimg5} />
						<Demonstration
							infoTitle={'title5'}
							infoText={'text'}
							infoDesc={'desc'}
							infoPrice={'price'}
						/>
					</div>
					<div>
						<img className='slider__img' src={slimg6} />
						<Demonstration
							infoTitle={'title6'}
							infoText={'text'}
							infoDesc={'desc'}
							infoPrice={'price'}
						/>
					</div>
				</Slider>
			</div>
		)
	}
}

export default SimpleSlider
