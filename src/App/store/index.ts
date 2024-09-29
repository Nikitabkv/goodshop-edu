import {configureStore} from '@reduxjs/toolkit'
import {cartSlice} from "../../pages/Cart/model/cart.slice.ts";
import {catalogSectionApi} from "../../features/Products/model/api.ts"

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [catalogSectionApi.reducerPath]: catalogSectionApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogSectionApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
