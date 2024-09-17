import {getCartByUser} from "./cartAsyncThunk.ts"
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  cartData: {
    products: [],
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
        }
      })
  }
})
