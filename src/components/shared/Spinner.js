import styled from "styled-components";

const Spinner = () => {
    return (
        <Loader></Loader>
    )
}

const Loader = styled.div`
    margin: auto;
    border: 3px solid #ddd;
    border-radius: 50%;
    border-top: 3px solid #ff6701;
    width: 25px;
    height: 25px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;

    /* Safari */
    @-webkit-keyframes spin {
        0% { -webkit-transform: rotate(0deg); }
        100% { -webkit-transform: rotate(360deg); }
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`
export default Spinner;
