// Library Imports
import React from 'react';
import styled from 'styled-components';

// A spinner input
const Spinput = (props) => {
    return (
        <Input defaultValue={4} min={4} max={20} {...props} type="number" />
    );  
};


const Input = styled.input`
    margin: 10px;
    background: rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 7px;
    height: 60px;
    color: white;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    box-shadow: none;
    text-align: center;
    font-size: 30px;
    font-family: 'Orbitron', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    width: 180px;
    
    &:focus {
        box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.7);
        outline: none;
    }
`;

export default Spinput;
