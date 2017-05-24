// Library Imports
import React, { Component } from 'react';
import styled from 'styled-components';
import { browserHistory } from 'react-router';

// Local Imports
import store from '../fakeStore';
import Spinput from './Spinput';
import Colorput from './Colorput';
import IconButton from './IconButton';
import Button from './Button';
import Header from './Header';
import Label from './Label';
import Gap from './Gap';

// Homepage settings form component
export default class SettingsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ai: true,
            height: 4,
            width: 6,
            colors: ["#FF0000", "#00FF00"]
        };
    }
    
    // Sets AI mode on or off
    onIconClick = (event, ai) => {
        event.preventDefault();
        this.setState({
            ai: ai
        });
    }
    
    // Changes color for player
    onColorChange = (event, player) => {
        let colors = this.state.colors.slice();
        colors[player] = event.target.value;
        this.setState({
            colors
        });
    }
    
    // Launches the game
    play = e => {
        e.preventDefault();
        // eeeee, replace with redux
        store.set(this.state);
        // Move to play page
        browserHistory.push('/play');
    }
    
    render() {
        return (
            <Form>
                <Header>Opponent</Header>
                <IconButton icon="android" text="AI" selected={this.state.ai} onClick={e => this.onIconClick(e, true)}></IconButton>
                <Gap />
                <IconButton icon="user" text="Human" selected={!this.state.ai} onClick={e => this.onIconClick(e, false)}></IconButton>
                <Header>Colours</Header>
                <Label>P1</Label>
                <Colorput onChange={e=>this.onColorChange(e,0)} defaultValue={this.state.colors[0]} />
                <Gap />
                <Colorput onChange={e=>this.onColorChange(e,1)} defaultValue={this.state.colors[1]} />
                <Label>P2</Label>
                <Header>Board Size (WxH)</Header>
                <Spinput defaultValue={6} onChange={e=>this.setState({width: e.target.value})} onKeyPress={e => e.preventDefault()} />
                <Gap>X</Gap>
                <Spinput onChange={e=>this.setState({height: e.target.value})} onKeyPress={e => e.preventDefault()} />
                <PlayButton onClick={this.play}>Play!</PlayButton>
            </Form>
        );       
    }  
}

const PlayButton = styled(Button)`
    display: block;
    width: 100px;
    padding: 15px;
    font-size: 25px;
    margin: 20px auto 20px auto;
`;


const Form = styled.form`
    background: rgba(0, 0, 0, 0.2);
    border: none;
    border-radius: 7px;
    color: white;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    box-shadow: none;
    text-align: center;
    padding: 15px;
`;
