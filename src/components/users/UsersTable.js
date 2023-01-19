import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import TablePreloader from "../shared/TablePreloader";
import Pagination from "../shared/Pagination";
import { Modal } from 'reactstrap';
import EditUser from "./EditUser";
import { useGetAllUsersQuery } from "../../stores/apis/usersApis";

const UsersTable = () => {
    const { data:allUsers, error:usersError, isLoading:isLoadingUsers, isError:isUsersError } = useGetAllUsersQuery();
    const [ openModal, setOpenModal ] = useState(false);
    const [ data, setData ] = React.useState(allUsers);
    const [ user, setUser ] = React.useState('ASC');
    const [ currentUser, setCurrentUser ] = useState('');

    useEffect(()=>{
        setData(allUsers);
    },[allUsers])

    const tableSorting = (column) => {
        if(user === 'ASC') {
            const sorted = [...data].sort((a,b)=> a[column].toLowerCase() > b[column].toLowerCase() ? 1 : -1 );
            setData(sorted);
            setUser('DSC')
        }
        if(user === 'DSC') {
            const sorted = [...data].sort((a,b)=> a[column].toLowerCase() < b[column].toLowerCase() ? 1 : -1 );
            setData(sorted);
            setUser('ASC')
        }
    }

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [ itemsPerPage ] = useState(5);
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const paginatedItems = data?.slice(indexOfFirstItem, indexOfLastItem);

    return (
        <UserStyles>
              <h4>Table view</h4>
            {
                isLoadingUsers ?  <TablePreloader count={5}/>  :
                isUsersError ? JSON.stringify(usersError) :
                <div>
                    <Table>
                        <thead>
                            <tr>
                                <th onClick={()=> tableSorting('name')}>Name <i className="fa fa-sort"></i></th>
                                <th onClick={()=> tableSorting('email')}>Email <i className="fa fa-sort"></i></th>
                                <th onClick={()=> tableSorting('occupation')}>Occupation <i className="fa fa-sort"></i></th>
                                <th onClick={()=> tableSorting('bio')}>Bio <i className="fa fa-sort"></i></th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            { paginatedItems?.map((user) => (
                                    <tr key={user.id} >
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.occupation}</td>
                                        <td>{(user.bio).substring(0, 30)}</td>
                                        <td onClick={()=> {
                                            setCurrentUser(user)
                                            setOpenModal(true)
                                        }}><span className="edit-icon">Edit <i className="fa fa-edit"></i></span></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </Table>

                    <Pagination
                        itemsPerPage={itemsPerPage}
                        totalItems={allUsers.length}
                        paginate={(pageNumber)=> setCurrentPage(pageNumber)}
                    />
                </div>
            }
            
            {/* edit user modal */}
            <Modal isOpen={openModal}>
                <EditUser 
                    closeModal={()=> setOpenModal(false)}
                    userId={currentUser.id}
                />
            </Modal>

        </UserStyles>
    )
}

const UserStyles = styled.div`
    padding: 10px;
    margin: 10px;
    border: 1px #E6ECF1 solid;
    border-radius: 6px;
    width: fit-content;

    h4 {
        font-weight: 700;
    }
`
const Table = styled.table`
    text-align: left;
    border-collapse: collapse;
    overflow-x: scroll;
    
    img { vertical-align: middle; }
    th { 
        font-weight: bold;
        cursor: pointer;
        .fa {
            font-size: 10px;
        }
    }
    th, td {
        padding: 1rem .8rem;
        border-bottom: 1px #f0f0f0 solid;
    }
    .active-row {
        background-color: #f0f0f0;
    }
    tbody {
        tr:nth-child(even){
            background-color: #f2f2f2;
        }
        /* tr:hover {
            background-color: #bbbaff;
            cursor: pointer;
        } */
        .edit-icon {
            cursor: pointer;
        }
    }
`
export default UsersTable;