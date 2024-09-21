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
    baseUrl: 'https://dummyjson.com/products/'
  }),
  endpoints: builder => ({
    getCatalog: builder.query<Products, GetCatalogParams>({
      query: params => ({
        url: `search`,
        params: {
          q: params.text,
          limit: params.limit,
          skip: params.skip
        }})
    }),
    getProduct: builder.query({
      query: (id) => `${id}`
    })
  })
})

export const {useGetCatalogQuery, useGetProductQuery} = catalogSectionApi
