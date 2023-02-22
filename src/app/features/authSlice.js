import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const authApi = createApi({
    reducerPath: `authApi`,
    baseQuery: fetchBaseQuery( { baseUrl: `http://localhost:3000` }),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: payload => ({
                url: `/login`,
                method: `POST`,
                body: payload
            })
        }),
        registerUser: builder.mutation({
            query: payload => ({
                url: `/register`,
                method: `POST`,
                body: payload
            })
        }),
        getUser: builder.query({
            query: payload => (`users/${payload}`)
        })
    })
})


export const { useLoginMutation, useRegisterUserMutation, useGetUserQuery } = authApi