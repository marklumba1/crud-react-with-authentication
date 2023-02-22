import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
    reducerPath: `postApi`,
    baseQuery: fetchBaseQuery({ baseUrl: `http://localhost:3000`}),
    endpoints: (builder) => ({
        fetchPosts: builder.query({
            query: (payload) => `/posts?userId=${payload}`,
            providesTags: ['POSTS']
        }),
        createPost: builder.mutation({
            query: (payload) => ({
                url: `/posts`,
                 method: `POST`,
                 body: payload
            }),
            invalidatesTags: ['POSTS']
        }),
        deletePost: builder.mutation({
            query: (payload) => ({
                url: `posts/${payload}`,
                method: `DELETE`
            }),
            invalidatesTags: ['POSTS']
        }),
        updatePost: builder.mutation({
            query: (payload) => ({
                url: `posts/${payload.id}`,
                method: `PATCH`,
                body: {text: payload.text}
            }),
            invalidatesTags: ['POSTS']
        })
    })
})

export const { useFetchPostsQuery, useCreatePostMutation, useDeletePostMutation, useUpdatePostMutation } = postApi