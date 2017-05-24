// Library Imports
import React, { Component } from 'react';
import styled from 'styled-components';

// Local Imports
import Board from '../../components/Board';

// Stateful component that provides state to the Board component
class BoardController extends Component {
    // Default width of 6x4 counters
    static defaultProps = {
        width: 6,
        height: 4,
        ai: true,
        onWin: winner => { console.log('Winner:', winner)},
        onDraw: () => { console.log('Draw') },
        colors: ["red", "green", "blue"]
    }
    
    // Constructs a board width x height
    constructor(props) {
        super(props);
        // Create an array height long (rows)
        let board = new Array(props.height);
        // Initialise each row valye with 
        for (let i = 0; i < props.height; i++) {
            board[i] = new Array(props.width);
            for (let j = 0; j < props.width; j++) {
                board[i][j] = null;
            }   
        }
        this.state = {
            board: board,
            player: 0,
            movesLeft: props.height * props.width,
            winner: null
        };
    }
    
    // Drops a counter into the column, finding a free row, and updates the state
    // Returns false if there was no space in that column
    makeMove = (player, column) => {
        let board = this.state.board;
        // Get the lowest down row
        let row = board.length - 1;
        // Find a free space in that column
        while(this.inBounds(row, column) && board[row][column] !== null) {
            row--;
        }
        // Make the move if it's on the board
        if (this.inBounds(row, column)) {
            board[row][column] = this.state.player;
            this.setState({
                board: board,
                player: this.state.player === 0 ? 1 : 0,
                winner: this.checkWin(row, column),
                movesLeft: this.state.movesLeft - 1
            });
            return true;
        } 
        // No space was found in this case
        return false;
    }
    
    // Returns the player who won, along with moves, null otherwise
    checkWin = (row, column) => {
        return (
               this.check(row, column, 1, 0)    // up
            || this.check(row, column, -1, 0)   // down
            || this.check(row, column, 0, 1)    // right
            || this.check(row, column, 0, -1)   // left
            || this.check(row, column, 1, 1)    // top-right
            || this.check(row, column, 1, -1)   // top-left
            || this.check(row, column, -1, 1)   // bottom-right
            || this.check(row, column, -1, -1)  // bottom-left
        );
    }
    
    // Checks for win starting from row column
    // Checks in the direction of incrementRow/incrementColumn
    check(row, column, incrementRow, incrementColumn) {
        // Get the player who's counter we're starting from
        const player = this.state.board[row][column];
        let count = 0;
        let coordinates = [];
        // Checks there waws a win in any given direction
        while (this.inBounds(row, column)) {
            if (player === this.state.board[row][column]) {
                coordinates.push({row, column});
                count++;
                if (count === 4) {
                    return {
                        player,
                        coordinates
                    };
                }
            } else {
                // Reset counter if a different color
                count = 0;
            }
            // Increments the row or column if need be by -1, 0, 1 to check in a certain direction (or none)            
            row += 1 * incrementRow;
            column += 1 * incrementColumn;
            
        }
        return null;
    }
    
    // Checks that the row and column coordinates are on the actual board
    inBounds = (row, column) => {
        return (
            row < this.state.board.length 
            && column < this.state.board[0].length
            && row >= 0
            && column >= 0
        );
    }
    
    // Gets a random integer 0 <= x < max
    randomInt = max =>  Math.floor(Math.random() * max);
    
    render() {
        const props = {
          board: this.state.board,
          onClick: !this.state.winner ? this.makeMove : undefined,
          player: this.state.player,
          winner: this.state.winner,
          colors: this.props.colors,
          canMove: !(this.props.ai && this.state.player === 1)
        };
        return (
            <div>
                <StatusText color={this.props.colors[this.state.player]}>
                    {!this.state.winner ? this.state.movesLeft === 0 ? 'Draw' : `Player ${this.state.player + 1}'s turn!` : `Player ${this.state.winner.player + 1} wins!` }
                </StatusText>
                <Board {...props} />
            </div>
        );
    }
    
    makeRandomMove = () => {
       let randomColumn;
        // Find a valid random move
        while (!this.inBounds(0, randomColumn)) {
            randomColumn = this.randomInt(this.state.board[0].length);
        }
        // Finally make the move after a short delay, and keep attempting to find a space
        setTimeout(() => 
            this.makeMove(this.state.player, randomColumn) 
            ? true
            : this.makeRandomMove(), 1000);
    }
    
    componentDidUpdate() {
        // If there are no counter spaces left, end the game
        if (this.state.movesLeft === 0) 
            return this.props.onDraw();
            
        // End if there is a winner
        if (this.state.winner) {
            return this.props.onWin(this.state.winner);
        }
        
        // If AI is enabled and it's player 2, make a random move
        if (this.props.ai && this.state.player === 1 && !this.state.winner) {
            this.makeRandomMove();
        }
    }
}

// Status text component
const StatusText = styled.p`
    text-align: center;
    color: ${props => props.color};
    font-size: 35px;
    font-weight: bolder;
`;

export default BoardController;
