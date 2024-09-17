import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


export const catalogSectionApi = createApi({
  reducerPath: 'productPageApiApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/products/'
  }),
  endpoints: builder => ({
    getCatalog: builder.query({
      query: ({text = '', limit = 12, skip = 0}) => `search?q=${text}&limit=${limit}&skip=${skip}`
    }),
    getProduct: builder.query({
      query: (id) => `${id}`
    })
  })
})

export const {useGetCatalogQuery, useGetProductQuery} = catalogSectionApi
