// reusable pagination component 
import React, { useState } from "react";
import styled from "styled-components";

export default function Pagination ({ itemsPerPage, totalItems, paginate  }){
    const [ currentPageNumber, setCurrentPageNumber ] = useState(1)
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <Paginator>
            {pageNumbers.map((number) => (
            <span 
                key={number} 
                className="page-number" 
                onClick={() => { 
                paginate(number); 
                setCurrentPageNumber(number)
                }} 
            >
                <span style={number === currentPageNumber ? {color : '#ff6701'} : {color: '#ddd'}}>
                {number}
                </span>
            </span>
            ))}
        </Paginator>
    )
}

const Paginator = styled.div`
    margin-top: 20px;
    
    .page-number {
        border: 1px #ddd solid;
        padding:5px  10px;
        cursor: pointer;
    }
`