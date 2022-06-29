import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addDoc, collection, getDocs, doc, deleteDoc } from 'firebase/firestore'
import {
	getAllProducts,
	addProduct,
	deleteProduct,
} from '../../redux/slices/productsSlice'
import { db, storage } from '../../Services/firebase/firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { productInputs } from '../../utils/inputsProducts'
import './AddPage.scss'

export const AddProduct = () => {
	const dispatch = useDispatch()
	const [file, setFile] = useState('')
	const [data, setData] = useState({})
	const [allData, setAllData] = useState([])

	const products = useSelector(state => state.productsSlice.products)

	const handleInput = e => {
		const id = e.target.id
		const value = e.target.value
		setData({ ...data, [id]: value })
	}
	// Получаем наши продукты с FireBase и передаем данные в Redux
	// useEffect(() => {
	// 	getDocs(collection(db, 'products')).then(res =>
	// 		dispatch(
	// 			getAllProducts({
	// 				arr: res.docs.map(el => ({ ...el.data(), id: el.id })),
	// 			}),
	// 		),
	// 	)
	// }, [dispatch])

	useEffect(() => {
		const fetchData = async () => {
			let list = []
			try {
				const querySnapshot = await getDocs(collection(db, 'products'))
				querySnapshot.forEach(doc => {
					list.push({ id: doc.id, ...doc.data() })
				})
				setAllData(list)
				console.log(list)
			} catch (err) {
				console.log(err)
			}
		}
		fetchData()
	}, [])

	console.log(allData)

	useEffect(() => {
		const uploadFile = () => {
			const name = new Date().getTime() + file.name
			console.log(name)
			const storageRef = ref(storage, file.name)

			const uploadTask = uploadBytesResumable(storageRef, file)
			uploadTask.on(
				'state_changed',
				snapshot => {
					const progress =
						(snapshot.bytesTransferred / snapshot.totalBytes) * 100
					console.log('Upload is ' + progress + '% done')
					switch (snapshot.state) {
						case 'paused':
							console.log('Upload is paused')
							break
						case 'running':
							console.log('Upload is running')
							break
						default:
							break
					}
				},
				error => {
					console.log(error)
				},
				() => {
					getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
						setData(prev => ({ ...prev, img: downloadURL }))
					})
				},
			)
		}
		file && uploadFile()
	}, [file])

	const handleAdd = async e => {
		e.preventDefault()

		// Add a new document with a generated id.
		const docRef = await addDoc(collection(db, 'products'), {
			...data,
		})
		dispatch(addProduct({ ...data }))
	}

	const handleDelete = async id => {
		try {
			dispatch(deleteProduct({ id }))
			await deleteDoc(doc(db, 'products', id))
		} catch (error) {}
	}

	return (
		<div style={{ fontSize: 50 }}>
			<a href='home'> НАЖМИ НА МЕНЯ </a>
			<div>
				<form className='form' onSubmit={handleAdd}>
					{productInputs.map(input => (
						<div className='input' key={input.id}>
							<label>{input.label}</label>
							<input
								id={input.id}
								type={input.type}
								placeholder={input.placeholder}
								onChange={handleInput}
							/>
						</div>
					))}
					<div className='picture'>
						<img
							src={
								file
									? URL.createObjectURL(file)
									: 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
							}
							alt='123'
						/>
					</div>
					<input
						type='file'
						id='file'
						onChange={e => setFile(e.target.files[0])}
					/>
					<button className='addButton' type='submit'>
						Кнопка добавления
					</button>
				</form>
			</div>
			<div>
				{products.map(product => (
					<div className='products' key={product.id}>
						<h2>{product.title}</h2>
						<p>{product.price}</p>
						<img src={product.img} alt={product.title} />
						<button
							className='deleteButton'
							onClick={() => handleDelete(product.id)}
						>
							Delete
						</button>
					</div>
				))}
			</div>
		</div>
	)
}
