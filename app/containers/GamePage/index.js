/*
 * GamePage
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
import { browserHistory } from 'react-router';

// Local Imports
import store from '../../fakeStore';
import BoardController from '../BoardController';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Container from '../../components/Container';

export default class GamePage extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    console.log(store.get());
    // Add in the values from the previous page - replace with redux
    this.state = {
      ...store.get(),
      gameCount: 0
    };
  } 
  
  // Create a new game by causing board to re-render 
  restartGame = () => {
    this.setState({
      ...this.state,
      gameCount: this.state.gameCount + 1
    });
  }
  
  render() {
    const props = {
      ai: this.state.ai,
      key: this.state.gameCount,
      width: +this.state.width,
      height: +this.state.height,
      colors: this.state.colors
    };

    return (
      <Container>
        <Title>Connect 4</Title>
        <BoardController {...props} />
        <NewButton onClick={() => browserHistory.push('/')}>New Game</NewButton>
        <ResetButton onClick={this.restartGame}>Restart</ResetButton>
      </Container>
    );
  }
}

const ResetButton = styled(Button)`
  float: right;
  right: 190px;
`;

const NewButton = styled(Button)`
  float: left;
  left: 210px;
`;