import React from "react";
import styled from 'styled-components';
import { useGetAllUsersQuery } from "../stores/apis/usersApis";

const Users = () => {
    const { data:allUsers, error:usersError, isLoading:isLoadingUsers, isError:isUesrsError } = useGetAllUsersQuery();
    return (
        <UserStyles>
            <h1>users</h1>
            <div>
            {
                isLoadingUsers ? <p>loading all users...</p> :
                isUesrsError ? JSON.stringify(usersError) :
                allUsers?.map(user => (
                    <div key={user._id}>
                        <p>{user.name}</p>
                    </div>
                ))
            }
            </div>
        </UserStyles>
    )
}

const UserStyles = styled.div`
    h1 {
        font-weight: 700;
    }
`
export default Users;