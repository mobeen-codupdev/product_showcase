import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../pages/Home/reducer'
import getProductReducer from '../pages/SearchResults/reducer'
import addProductsReducer from '../pages/SubmitBrand/reducer'

export const store = configureStore({
    reducer: {
        userReducer,
        addProductsReducer,
        getProductReducer,
    },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
