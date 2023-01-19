// users CRUD
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./api-headers"

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}`, headers: headers }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => `/app/api/users`,
        }),
        getUserById: builder.query({
            query: (id) => `/app/api/user/${id}`,
        }),
        updateUser: builder.mutation({
            query: (patch) => ({
                url: `/app/api/user/${patch.userId}`,
                method: 'PATCH',
                body: patch.payload,
            })
        })
    })
})

export const { useGetAllUsersQuery, useGetUserByIdQuery, useUpdateUserMutation } = usersApi;