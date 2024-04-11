import { configureStore } from '@reduxjs/toolkit'
import getProductReducer from '../pages/SearchResults/reducer'
import addProductsReducer from '../pages/SubmitBrand/reducer'

export const store = configureStore({
    reducer: {
        addProductsReducer,
        getProductReducer,
    },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
