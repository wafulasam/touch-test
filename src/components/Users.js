import React from "react";
import styled from 'styled-components';

const Users = () => {
    return (
        <UserStyles>
            <h1>users</h1>
        </UserStyles>
    )
}

const UserStyles = styled.div`
    h1 {
        font-weight: 700;
    }
`
export default Users;