import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

interface UserInfo {
  "accessToken": string,
  "refreshToken": string,
  "id": number,
  "username": string,
  "email": string,
  "firstName": string,
  "lastName": string,
  "gender": string,
  "image": string
}

interface loginParams {
  username: string,
  password: string,
}

export const loginApi = createApi({
  reducerPath: 'loginApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/auth/'
  }),
  keepUnusedDataFor: 1,
  endpoints: builder => ({
    login: builder.mutation<UserInfo, loginParams>({
      query: ({username, password}) => ({
        method: 'POST',
        url: `login`,
        body: {
          username: username,
          password: password
        }
      })
    }),
    getUserInfo: builder.query<UserInfo, void>({
      query: () => ({
        url: `me`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem('TOKEN')}`
        }
      })
    })
  })
})

export const {useLoginMutation, useGetUserInfoQuery} = loginApi
