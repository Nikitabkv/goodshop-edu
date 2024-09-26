import {getCartByUser} from "./cartAsyncThunk.ts"
import {createSlice} from "@reduxjs/toolkit"
import {toast} from "react-toastify"

const initialState = {
  cartData: {
    products: [],
    totalQuantity: 0,
    discountedTotal: 0,
    total: 0,
  },
  userId: 0,
  isFetching: false
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userId = action.payload
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getCartByUser.fulfilled, (state, action) => {
        if (action.payload.carts[0]) {
          state.cartData.products = action.payload.carts[0].products
          state.cartData.totalQuantity = action.payload.carts[0].totalQuantity
          state.cartData.total = action.payload.carts[0].total
          state.cartData.discountedTotal = action.payload.carts[0].discountedTotal
        } else {
          state.cartData.products = []
          state.cartData.totalQuantity = 0
        }
        state.isFetching = false
      })
      .addCase(getCartByUser.pending, (state) => {
        state.isFetching = true
      })
      .addCase(getCartByUser.rejected, (state) => {
        toast.error('An error occurred while loading the user cart. Try to reload page or back later');
        state.isFetching = false
      })
  }
})

export const {setUserId} = cartSlice.actions
