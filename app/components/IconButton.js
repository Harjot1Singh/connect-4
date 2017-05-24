// Library Imports
import React from 'react';
import styled from 'styled-components';

const IconButton = ({ icon, text, onClick, selected }) => {
    return (
      <Button onClick={onClick} selected={selected}>
        <i className={`fa fa-${icon}`} />
        <p>{text}</p>
      </Button>
    );
}; 

const Button = styled.button`
    cursor: pointer;
    margin: 20px;
    background: rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 7px;
    color: white;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    box-shadow: none;
    text-align: center;
    font-size: 50px;
    padding: 15px 40px 15px 40px;
    font-family: 'Orbitron', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    vertical-align: top;
    width: 180px;
    outline: none;
    
    ${props => props.selected ? '' : `&:hover {`}
        background: white;
        color: rgba(0, 0, 0, 0.2);
        box-shadow: 0 0 0.5em rgba(0, 209, 178, 0.7);
    ${props => props.selected ? '' : `}`}
    
    & > i {
        vertical-align: top;
        display: block;
        margin-bottom: 10px;
    }
    
    & > p {
        margin : 0;
        font-size: 30px;
    }
`;

IconButton.defaultProps = {
    onClick: e => { e.preventDefault() }
};

export default IconButton;
