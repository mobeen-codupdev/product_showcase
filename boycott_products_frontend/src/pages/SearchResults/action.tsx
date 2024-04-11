import { createAsyncThunk } from '@reduxjs/toolkit'
import { GET_PRODUCTS_ENDPOINT } from '../../config/endpoints'
import { SearchProductParams } from './type'

export const getProduct = createAsyncThunk(
    'getProduct',
    async (params: SearchProductParams) => {
        const url = `${GET_PRODUCTS_ENDPOINT}?page=${params.page}&limit=${params.limit}&term=${params.term}`
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        if (!response.ok) {
            throw new Error('Failed to add product')
        }

        const addProductResponse = await response.json()
        return addProductResponse.data
    },
)

export const initProducts = createAsyncThunk(
    'initProducts',
    async () => {
        return []
    },
)
