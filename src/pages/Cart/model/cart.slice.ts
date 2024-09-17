import {getCartByUser} from "./cartAsyncThunk.ts"
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  cartData: {
    products: [],
    totalQuantity: 0
  }
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
  },
  extraReducers: builder => {
    builder
      .addCase(getCartByUser.fulfilled, (state, action) => {
        if (action.payload.carts[0]) {
          state.cartData.products = action.payload.carts[0].products
          state.cartData.totalQuantity = action.payload.carts[0].totalQuantity
        } else {
          state.cartData.products = []
          state.cartData.totalQuantity = 0
        }
      })
  }
})
