import React, { Component } from 'react';
import styled from 'styled-components';

import Counter from './Counter';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
              controller: new BoardController(props.width, props.height)
        };
    }
    
    render() {
        return (
            <StyledBoard>
                
            </StyledBoard>
        );
    }
}

const StyledBoard = styled.div`
    background: rgb(20,50,200);
    display: inline-block;
    padding: 0;
`;

class B {
    // Constructs a board width x height
    constructor(width, height) {
       this.board = new Array(width);
       for (var i = 0; i < height; i++)
        this.board[i] = new Array(height);
    }
    
    // Drops a counter into the column, finding a free row
    // Returns true if player 1 won, false if player 2 won, null otherwise
    makeMove(isPlayer1, column) {
        // Find a free space
        let row = this.board[column].length - 1;
        while(typeof this.board[row][column] !== "undefined")
            row--;
        // Make the move if it's on the board
        if (this.inBounds(row, column)) {
            this.board[row][column] = isPlayer1;
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
        const player = this.board[row][column];
        let count = 0;
        let tempRow = row;
        let tempColumn = column;
        // Checks there waws a win in any given direction
        while (this.inBounds(tempRow, tempColumn)) {
            if (player === this.board[tempRow][tempColumn]) {
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
            row < this.board.length 
            && column < this.board[0].length
            && row >= 0
            && column >= 0
        );
    }
    
    getBoard() {
        return this.board;
    }
}

export default Board;