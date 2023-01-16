// reusable textarea component
import React from 'react';
import styled from 'styled-components';

const TextArea = (props) => {
    const {
        outline, 
        type, 
        name, 
        value, 
        placeholder,   
        required, 
        disabled,
        maxLength,
        width,
        height,
        padding,
        onChange,
        onKeyPress
    } = props;
    return (
        <InputWrap 
            type={ type ? type : 'text' }
            onKeyPress={onKeyPress}
            name={name}
            placeholder={placeholder}
            padding={padding}
            onChange={onChange}
            value={value}
            required={required}
            outline={outline}
            disabled={disabled}
            maxLength={maxLength}
            style={{ width: width, height: height, padding: padding }}
        />
    )
}

const InputWrap = styled.textarea`
    padding: .6rem 0;
    font-size: inherit;
    border: 1px solid #E6ECF1;
    border-radius: 6px;
    background-color: #ECF0F3;
    outline: none;
    color: #74818D;
    padding: ${props => props.padding};
    // width: 100%;
    width: ${props => props.width};
    height: ${props => props.height} !important;
    font-family: inherit;
    outline: ${(props)=> props.outline ? `1px solid #fff2eb` : 'none'};
    
    :focus {
        border: 2px solid #fff2eb;
    }
`

export default TextArea;