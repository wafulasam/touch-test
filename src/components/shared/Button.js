// reusable button component
import React from 'react';
import styled from 'styled-components';

const Button = (props) => {
    const { 
        background,
        border,
        borderRadiusMax,
        label,
        color,
        width,
        fontWeight,
        padding,
        disabled,
        onClick,
    } = props;
    return (
      <Btn
        background={background ? background : '#ff6701'}
        border={border}
        borderRadiusMax={borderRadiusMax}
        color={color ? color : '#ffffff'}
        width={width}
        padding={padding}
        fontWeight={fontWeight}
        onClick={onClick}
        disabled={disabled}
        label={label}
    >
        {label ? label : 'save'}
      </Btn>
    )
}

const Btn = styled.button`
    background: ${(props) => props.background};
    color: ${props => props.color};
    padding: ${props => props.padding};
    min-width: ${props => props.width};
    border-radius: ${props => props.borderRadiusMax ? '50px' : '6px'};
    border: ${props => props.border ? props.border : 'none'};
    transition: all 0.2s;
    outline: none;
    cursor: pointer;
    font-size: inherit;
    font-family: inherit;
    
    &:disabled {
        cursor: not-allowed;
        opacity: 0.7;
    }
    &:focus {
        outline: none;
    }
    &:hover {
        opacity: 0.9;
    }
    img {
        vertical-align: middle;
        margin-right: .5rem;
    }
`

export default Button;