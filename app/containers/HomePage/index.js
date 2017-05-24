/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

// Library Imports
import React, { Component } from 'react';
import styled from 'styled-components';

// Local Imports
import Button from '../../components/Button';
import Title from '../../components/Title';
import Container from '../../components/Container';
import Form from '../../components/Form';

export default class HomePage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  } 
  
  render() {
    
    return (
      <Container>
        <Title>Connect 4</Title>
        <Form />
      </Container>
    );
  }
}
