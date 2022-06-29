import { getDocs, collection } from 'firebase/firestore'
import { Router } from './Router'
import { db, storage } from './Services/firebase/firebase'
import { useEffect } from 'react'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { getAllProducts } from './redux/slices/productsSlice'

function App() {
	const dispatch = useDispatch()
	const products = useSelector(state => state.productsSlice.products)

	useEffect(() => {
		getDocs(collection(db, 'products')).then(res =>
			dispatch(
				getAllProducts({
					arr: res.docs.map(el => ({ ...el.data(), id: el.id })),
				}),
			),
		)
	}, [dispatch])

	return (
		<div className='App'>
			<Router />
		</div>
	)
}

export default App
