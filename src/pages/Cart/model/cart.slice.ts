import {getCartByUser} from "./cartAsyncThunk.ts"
import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  cartData: {
    carts: [
      {
        products: []
      }
    ]
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
        state.cartData = action.payload
      })
  }
})
