import React, { useState } from "react";
import styled from "styled-components";
import Input from '../shared/Input';
import TextArea from '../shared/TextArea';
import Button from "../shared/Button";
import { Spinner } from "reactstrap";
// import { useUpdateUserQuery } from "../stores/apis/usersApis";

const EditUser = (props) => {
    const { closeModal, user } = props;
    const [ name, setName ] = useState(user.name);
    const [ email, setEmail ] = useState(user.email);
    const [ occupation, setOccupation ] = useState(user.occupation);
    const [ bio, setBio ] = useState(user.bio);
    const [ loading, setLoading ] = useState(false);

    // const [ updateUser ] = useUpdateUserQuery();
    

    const handleSubmit = () => {
        setLoading(true);
        const payload = {
            name: name,
            email: email,
            occupation: occupation,
            bio: bio
        }
        console.log(payload)

    }

    return (
        <Styles>
            <div className="modal-header">
                <h3>{user.name}</h3>
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
                    label={loading ? <><Spinner><span></span></Spinner></> : 'Edit'}
                    padding='10px 30px'
                    width='100%'
                    onClick={()=> handleSubmit()}
                    disabled={loading}
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