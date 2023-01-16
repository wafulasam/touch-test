import React from "react";
import UsersTable from '../components/users/UsersTable'
import UsersCards from "../components/users/UsersCards";

const Home = () => {
    return (
       <>
        <UsersTable/>
        <UsersCards/>
       </>
    )
}

export default Home;