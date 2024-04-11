import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product, ProductState } from './type'
import { addProduct } from './action'

const initialState: ProductState = {
    loading: false,
    product: null,
    error: undefined,
}

const addProductSlice = createSlice({
    name: 'addProduct',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(addProduct.pending, (state) => {
            console.log('pending')
            state.loading = true
        })
        builder.addCase(
            addProduct.fulfilled,
            (state, action: PayloadAction<Product>) => {
                console.log('fullfilled')
                state.loading = false
                state.product = action.payload
            },
        )
        builder.addCase(addProduct.rejected, (state, action) => {
            console.log('rejected')
            state.loading = false
            state.product = null
            state.error = action.error.message
        })
    },
    reducers: {},
})

export default addProductSlice.reducer
