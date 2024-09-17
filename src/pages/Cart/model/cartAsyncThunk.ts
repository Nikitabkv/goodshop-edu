import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getCartByUser = createAsyncThunk(
  'cart/getCartByUser',
  async (userId: number, thunkAPI) => {
    try {
      const response = await axios.get(`https://dummyjson.com/carts/user/${userId}`)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)
