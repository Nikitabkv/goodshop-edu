import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCartByUser = createAsyncThunk(
  'cart/getCartByUser',
  async (userId: number, thunkAPI) => {
    try {
      const response = await axios.get(`https://dummyjson.com/auth/carts/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
        }
      })
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const updateProduct = createAsyncThunk(
  'cart/updateProduct',
  //TODO: any
  async ({products, cartId}: {products: any, cartId: number}, thunkAPI) => {
    try {
      const response = await axios.put(`https://dummyjson.com/auth/carts/${cartId}`, {
        merge: false,
        products: products
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
        }
      })
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

