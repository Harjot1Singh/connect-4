import React, { Component } from 'react';

class BoardController extends Component {
    // Constructs a board width x height
    constructor(props) {
        super(props);
        let board = new Array(props.width);
        for (var i = 0; i < props.height; i++)
            board[i] = new Array(props.height);
        this.state = {
            board: board
        };
    }
    
    // Drops a counter into the column, finding a free row
    // Returns true if player 1 won, false if player 2 won, null otherwise
    makeMove(isPlayer1, column) {
        // Find a free space
        let row = this.state.board[column].length - 1;
        let board = this.state.board;
        while(typeof board[row][column] !== "undefined")
            row--;
        // Make the move if it's on the board
        if (this.inBounds(row, column)) {
            board[row][column] = isPlayer1;
            this.setState({
                board: board
            });
            return this.checkWin(row, column);
        }
        return null;
    }
    
    // Returns the player who won, null otherwise
    checkWin(row, column) {
        return (
               this.check(row, column, true, null)
            || this.check(row, column, false, null)
            || this.check(row, column, null, true)
            || this.check(row, column, null, false)
            || this.check(row, column, true, true)
            || this.check(row, column, true, false)
            || this.check(row, column, false, true)
            || this.check(row, column, false, false)
        );
    }
    
    // Checks for win
    check(row, column, incrementRow, incrementColumn) {
        // Increments the counter in the correct direction
        const increment = (counter, increment) => {
            // If true, increment, false, decrement, anything else, no change
            if (increment === true)
                return ++counter;
            else if (increment === false) {
                return --counter;
            }
            // No change
            return counter;
        };
        // Get the player who's counter we're starting from
        const player = this.state.board[row][column];
        let count = 0;
        let tempRow = row;
        let tempColumn = column;
        // Checks there waws a win in any given direction
        while (this.inBounds(tempRow, tempColumn)) {
            if (player === this.state.board[tempRow][tempColumn]) {
                count++;
                if (count === 4)
                    return player;
            }
            // Increments the row or column if need be            
            tempRow = increment(tempRow, incrementRow);
            tempColumn = increment(tempColumn, incrementColumn);
            
        }
        return null;
    }
    
    inBounds(row, column) {
        return (
            row < this.state.board.length 
            && column < this.state.board[0].length
            && row >= 0
            && column >= 0
        );
    }
    
    render() {
        return <Board board={this.state.board} />;
    }
}

export default BoardController;
