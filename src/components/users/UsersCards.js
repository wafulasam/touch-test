import React, { useState } from "react";
import styled from 'styled-components';
import Avatar from '../../assets/icons/avatar.png'
import { Modal } from 'reactstrap';
import EditUser from "./EditUser";
// import { useGetAllUsersQuery } from "../../stores/apis/usersApis";

const { users } = require('../../users');

const UsersCards = () => {
    // const { data:allUsers, error:usersError, isLoading:isLoadingUsers, isError:isUsersError } = useGetAllUsersQuery();
    const [ openModal, setOpenModal ] = useState(false);
    const [ currentUser, setCurrentUser ] = useState('');
    return (
        <UserStyles>
            <h4>Card view</h4>
            <div className="card-wrapper row">
                {users?.map(user => (
                    <div className="col-md-3" key={user._id}>
                        <div className="card">
                            <div className="avatar">
                                <img src={user.image ? user.image : Avatar} alt="avatar" height={100} width={100}/>
                            </div>
                            <p><b>{user.name}</b></p>
                            <p>{user.occupation}</p>
                            <p><i>"{(user.bio).substring(0, 15)}..."</i></p>
                            <div className="edit-btn-wrapper">
                                <button className="edit-btn" onClick={()=> {
                                    setCurrentUser(user)
                                    setOpenModal(true)
                                }}>Edit profile</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* edit user modal */}
            <Modal isOpen={openModal}>
                <EditUser 
                    closeModal={()=> setOpenModal(false)}
                    user={currentUser}
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

    .card-wrapper {
        .card {
            padding: 10px;
            margin: 10px;
            border: 1px #E6ECF1 solid;
            border-radius: 6px;
            /* width: fit-content; */
            text-align: center;

            .avatar {
                text-align: center;
                img { margin-bottom: 10px }
            }
            .edit-btn-wrapper {
                text-align: center;
                .edit-btn {
                    background-color: #ff6701;
                    padding: 5px 15px;
                    border-radius: 50px;
                    border: none;
                    color: #ffffff;
                    width: fit-content;
                }
            }
        }
    }

`
export default UsersCards;