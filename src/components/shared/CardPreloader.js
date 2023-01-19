import React from "react";
import styled from 'styled-components';

const CardPreloader = () => {
    return (
        <CardStyles>
            <div className="card-wrapper row">
                <div className="col-md-3">
                    <div className="card">
                        <div className="avatar-icon"></div>
                        <p><section></section></p>
                        <p><section></section></p>
                        <p><section></section></p>
                        <div className="edit-btn-wrapper">
                            <button className="edit-btn-loader">Edit profile</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="avatar-icon"></div>
                        <p><section></section></p>
                        <p><section></section></p>
                        <p><section></section></p>
                        <div className="edit-btn-wrapper">
                            <button className="edit-btn-loader">Edit profile</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="avatar-icon"></div>
                        <p><section></section></p>
                        <p><section></section></p>
                        <p><section></section></p>
                        <div className="edit-btn-wrapper">
                            <button className="edit-btn-loader">Edit profile</button>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card">
                        <div className="avatar-icon"></div>
                        <p><section></section></p>
                        <p><section></section></p>
                        <p><section></section></p>
                        <div className="edit-btn-wrapper">
                            <button className="edit-btn-loader">Edit profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </CardStyles>
    )
}

const CardStyles = styled.div`
    .card {
        padding: 10px;
        margin: 10px;
        border: 1px #E6ECF1 solid;
        border-radius: 6px;
        width: 100%;
        text-align: center;

        .avatar-icon {
            background-color: #cccccc;
            height: 100px;
            width: 100px;
            border-radius: 50%;
            margin: 10px 10%;
        }

        section {
            border-radius: 50px;
            padding: 5px;
            width: 80%;
            margin-left: 10%;
            animation: pulse 0.75s linear alternate infinite;
        }

        @keyframes pulse {
            0% {
                background-color: #fff;
            }
            100% {
                background-color: #cccccc;
            }
        }

        .edit-btn-wrapper {
            text-align: center;
            .edit-btn-loader {
                background-color: #cccccc;
                padding: 5px 15px;
                border-radius: 50px;
                border: none;
                color: #ffffff;
                width: fit-content;
            }
        }
    }
`
export default CardPreloader;