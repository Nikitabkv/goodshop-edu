import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface ProductItem {
  id: number
  title: string
  price: number
  thumbnail: string
}

interface Products {
  "products": ProductItem[],
  "total": 194,
  "skip": 0,
  "limit": 12
}

interface GetCatalogParams {
  text: string
  limit: number
  skip: number
}

export const catalogSectionApi = createApi({
  reducerPath: 'productPageApiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/auth/products/'
  }),
  endpoints: builder => ({
    getCatalog: builder.query<Products, GetCatalogParams>({
      query: params => ({
        url: `search`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
        },
        params: {
          q: params.text,
          limit: params.limit,
          skip: params.skip
        }})
    }),
    getProduct: builder.query({
      query: (id) => ({
        url: `${id}`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
        },
      })
    })
  })
})

export const {useGetCatalogQuery, useGetProductQuery} = catalogSectionApi
