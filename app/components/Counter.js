import React from 'react';
import styled from 'styled-components';

const Counter = styled.div`
    border: 3px solid black;
    height: 60px;
    width: 60px;
    border-radius: 50px;
    margin: 10px;
    background: ${props => props.selected ? props.color : 'white'};
    display: inline-block;
    transition: all 0.5s ease-in-out;
    cursor: ${props => props.selected ? 'default' : 'pointer'}; 
    
    ${props => props.selected ? '' :
    `
    &:hover {
        background: red;
    }
    `
    }
    
`;

export default Counter;
