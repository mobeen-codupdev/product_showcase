import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product, GetProductState } from './type'
import { getProduct, initProducts } from './action'

const initialState: GetProductState = {
    loading: false,
    data: [],
    error: undefined,
}

const getProductSlice = createSlice({
    name: 'getProduct',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getProduct.pending, (state) => {
            state.loading = true
            state.data = []
        })
        builder.addCase(
            getProduct.fulfilled,
            (state, action: PayloadAction<Product[]>) => {
                state.loading = false
                state.data = action.payload
            },
        )
        builder.addCase(getProduct.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.error = true
        })
        builder.addCase(initProducts.fulfilled, (state) => {
            state.loading = false
            state.data = []
        })
    },
    reducers: {},
})

export default getProductSlice.reducer
