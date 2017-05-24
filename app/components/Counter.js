// Library Imports
import React, { Component } from 'react';
import styled from 'styled-components';

// A stateless styled component circle that changes color and style
const Counter = styled.div`
    border: 3px solid ${props => props.marked ? 'white' : 'black'};
    height: 60px;
    width: 60px;
    border-radius: 50px;
    margin: 10px;
    background: ${props => props.selected ? props.color : 'white'};
    display: inline-block;
    transition: all 0.5s ease-in-out;
    cursor: ${props => !props.selected && props.enabled ? 'pointer' : 'default'}; 
    
    ${props => !props.selected && props.enabled ? 
    `
    &:hover {
        background: ${props.color};
    }
    ` : ''
    }
    
`;

Counter.defaultProps = {
  enabled: true  
};

export default Counter;
