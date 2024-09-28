import {getCartByUser, updateProduct} from "./cartAsyncThunk.ts"
import {createSlice} from "@reduxjs/toolkit"
import {toast} from "react-toastify"

interface Product {
  id: number
  quantity: number
  discountPercentage: number
  discountedTotal: number
  thumbnail: string
  total: number
  title: string
  price: number
}

interface SliceState {
  cartData: {
    id: number
    products: Product[]
    totalQuantity: number
    discountedTotal: number
    total: number
  }
  userId: number
  userName: string
  isFetching: boolean
  isUpdating: boolean
}

const initialState: SliceState = {
  cartData: {
    id: 0,
    products: [],
    totalQuantity: 0,
    discountedTotal: 0,
    total: 0,
  },
  userId: 0,
  userName: '',
  isFetching: false,
  isUpdating: false,
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userId = action.payload.id
      state.userName = action.payload.firstName + ' ' + action.payload.lastName
    },
    setUpdateStatus: (state, action) => {
      state.isUpdating = action.payload
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
          state.cartData.id = action.payload.carts[0].id
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
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.cartData.totalQuantity = action.payload.totalQuantity
        state.cartData.discountedTotal = action.payload.discountedTotal
        state.cartData.total = action.payload.total

        state.cartData.products.forEach((el: {id: number, quantity: number}, index: number) => {
          if (el.id === action.payload.products[0].id) {
            state.cartData.products[index] = {
              ...action.payload.products[0],
              discountedTotal: action.payload.products[0].discountedPrice,
            }
          }
        })
        // Если продукта нет в корзине добавляем его
        if (!state.cartData.products.find(el => el.id === action.payload.products[0].id)) {
          state.cartData.products.push(action.payload.products[0])
        }
        state.isUpdating = false
      })
      .addCase(updateProduct.pending, (state) => {
        state.isUpdating = true
      })
      .addCase(updateProduct.rejected, (state) => {
        state.isUpdating = false
      })
  }
})

export const {setUserData, setUpdateStatus} = cartSlice.actions
