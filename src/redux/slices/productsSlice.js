import { createSlice } from '@reduxjs/toolkit'

const productsReducer = createSlice({
	name: 'products',
	initialState: {
		products: [],
		productsCount: 0,
	},
	reducers: {
		getAllProducts: (state, action) => {
			state.products = action.payload.arr
			state.productsCount = action.payload.arr.length
		},
		addProduct: (state, action) => {
			state.products.push({
				arr: action.payload,
			})
		},
		deleteProduct: (state, action) => {
			state.products = state.products.filter(p => p.id !== action.payload.id)
		},
	},
})

export default productsReducer.reducer
export const { getAllProducts, addProduct, deleteProduct } =
	productsReducer.actions
