import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Input from '../shared/Input';
import TextArea from '../shared/TextArea';
import Button from "../shared/Button";
import Spinner from "../shared/Spinner";
import { useGetUserByIdQuery, useUpdateUserMutation } from '../../stores/apis/usersApis'

const EditUser = (props) => {
    const { closeModal, userId } = props;
    const { data:user, error:userError, isLoading:isLoadingUser, isError:isUserError } = useGetUserByIdQuery(userId);
    const [updateUser, { isLoading , error: editError, isSuccess: patchSuccess}]  = useUpdateUserMutation();
    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ occupation, setOccupation ] = useState('');
    const [ bio, setBio ] = useState('');

    useEffect(()=> {
        if(user){
            setName(user.name);
            setEmail(user.email);
            setOccupation(user.occupation)
            setBio(user.bio)
        }
    },[user])

    const handleSubmit = () => {
        // edited user payload
        const payload = {
            occupation: occupation,
            bio: bio,
            email: email,
            name: name,
        }
        const patch = { userId, payload };
        updateUser(patch);
    }

    if(patchSuccess){
        setInterval(() => {
            closeModal(()=> false)
        }, 3000);
    }

    return (
        <Styles>
            <div className="modal-header">
            { isLoadingUser ? <p>fetching user...</p>  : isUserError ? JSON.stringify(userError) : <h3>{user.name}</h3> }
                <img src={require('../../assets/icons/close.png')} alt="close" height={30} onClick={closeModal}/>
            </div>
            <div className="form">
                <label>Name</label>
                <Input
                    type='text'
                    placeholder=''
                    width='100%'
                    padding='10px'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />

                <label>Email</label>
                <Input
                    type='email'
                    placeholder=''
                    width='100%'
                    padding='10px'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label>Occupation</label>
                <Input
                    type='text'
                    placeholder=''
                    width='100%'
                    padding='10px'
                    value={occupation}
                    onChange={(event) => setOccupation(event.target.value)}
                />
                <label>Bio</label>
                <TextArea
                    value={bio}
                    width='100%'
                    height="100px"
                    padding='10px'
                    onChange={(event) => setBio(event.target.value)}
                />
                <Button
                    label={isLoading ? <Spinner/>  : patchSuccess ? 'Success ✅' : editError ? 'Error 🛑! Try Again 🔄' : 'Edit'}
                    padding='10px 30px'
                    width='100%'
                    onClick={()=> handleSubmit()}
                    disabled={isLoading}
                />

            </div>
        </Styles>
    )
}

const Styles = styled.div`
    .modal-header {
        padding-top: 20px;
        padding-bottom: 10px;
        background-color: #fff2eb;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        h3 {
            font-weight: 700;
        }
        img {
            cursor: pointer;
        }
    }
    .form {
        padding: 20px;
        label {
            margin-top: 10px;
            font-weight: bold;
            color: #ff6701;
        }
    }
`

export default EditUser;