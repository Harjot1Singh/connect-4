import React, { Component } from 'react';

import Board from '../../components/Board';

class BoardController extends Component {
    static defaultProps = {
        width: 6,
        height: 4
    }
    
    // Constructs a board width x height
    constructor(props) {
        super(props);
        let board = new Array(props.height);
        for (let i = 0; i < props.height; i++) {
            board[i] = new Array(props.width);
            for (let j = 0; j < props.width; j++) {
                board[i][j] = null;
            }   
        }
        this.state = {
            board: board,
            player: 0,
            winner: null
        };
    }
    
    // Drops a counter into the column, finding a free row
    // Returns the player who won, null otherwise
    makeMove = (player, column) => {
        let board = this.state.board;
        // Get the lowest down row
        let row = board.length - 1;
        // Find a free space
        while(board[row][column] !== null)
            row--;
        // Make the move if it's on the board
        if (this.inBounds(row, column)) {
            board[row][column] = this.state.player;
            this.setState({
                board: board,
                player: this.state.player === 0 ? 1 : 0,
                winner: this.checkWin(row, column)
            });
        }
        return null;
    }
    
    // Returns the player who won, null otherwise
    checkWin = (row, column) => {
        return (
               this.check(row, column, 1, 0)
            || this.check(row, column, -1, 0)
            || this.check(row, column, 0, 1)
            || this.check(row, column, 0, -1)
            || this.check(row, column, 1, 1)
            || this.check(row, column, 1, -1)
            || this.check(row, column, -1, 1)
            || this.check(row, column, -1, -1)
        );
    }
    
    // Checks for win
    check(row, column, incrementRow, incrementColumn) {
        // Get the player who's counter we're starting from
        const player = this.state.board[row][column];
        let count = 0;
        // Checks there waws a win in any given direction
        while (this.inBounds(row, column)) {
            if (player === this.state.board[row][column]) {
                count++;
                if (count === 4)
                    return player;
            }
            // Increments the row or column if need be            
            row += 1 * incrementRow;
            column += 1 * incrementColumn;
            
        }
        return null;
    }
    
    inBounds = (row, column) => {
        return (
            row < this.state.board.length 
            && column < this.state.board[0].length
            && row >= 0
            && column >= 0
        );
    }
    
    render() {
        return <Board board={this.state.board} onClick={this.makeMove} player={this.state.player} />;
    }
}

export default BoardController;
