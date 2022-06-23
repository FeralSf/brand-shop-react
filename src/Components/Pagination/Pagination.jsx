import React from 'react'
import './Pagination.scss'
export const Pagination = () => {
	return (
		<div className='pagination container'>
			<ul className='pagination__inner'>
				<li className='pagination__item'>
					<button className='pagination__left-arrow'>
						<i className='fas fa-chevron-left'></i>
					</button>
				</li>
				<li className='pagination__item'>
					<button>1</button>
				</li>
				<li className='pagination__item'>
					<button>2</button>
				</li>
				<li className='pagination__item'>
					<button>3</button>
				</li>
				<li className='pagination__item'>
					<button>4</button>
				</li>
				<li className='pagination__item'>
					<button>5</button>
				</li>
				<li className='pagination__item pagination__dotted'>
					<span>....</span>
				</li>
				<li className='pagination__item'>
					<button>20</button>
				</li>
				<li>
					<button className='pagination__right-arrow'>
						<i className='fas fa-chevron-right'></i>
					</button>
				</li>
			</ul>
		</div>
	)
}
