import { createAsyncThunk } from '@reduxjs/toolkit'
import { ADD_PRODUCTS_ENDPOINT } from '../../config/endpoints'
import { FormValues } from './type'

export const addProduct = createAsyncThunk('addProduct', async (payload: FormValues) => {
    const response = await fetch(ADD_PRODUCTS_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })

    console.log(response)

    if (!response.ok) {
        throw new Error('Failed to add product')
    }

    const addProductResponse = await response.json()
    return addProductResponse.data
})
