// users CRUD
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { headers } from "./api-headers"

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${process.env.REACT_APP_BASE_URL}`, headers: headers }),
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => `/rest/sample`,
        }),
        updateUser: builder.mutation({
            query: ({ id, user }) => ({
                url: `/rest/sample/${id}`,
                method: 'PUT',
                body: user,
            })
        })
    })
})

export const { useGetAllUsersQuery, useUpdateUserQuery } = usersApi;