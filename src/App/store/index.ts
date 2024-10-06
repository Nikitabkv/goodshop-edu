import {configureStore} from '@reduxjs/toolkit'
import {cartSlice} from "../../pages/Cart/model/cart.slice.ts";
import {catalogSectionApi} from "../../features/Products/model/api.ts"
import {loginApi} from "../../pages/LoginPage/model/api.ts";

export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    [catalogSectionApi.reducerPath]: catalogSectionApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogSectionApi.middleware, loginApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
