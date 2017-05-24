// Library Imports
import React from 'react';
import styled from 'styled-components';

// Local Imports
import Counter from './Counter';

// Stateless Component that renders a Connect 4 board
const Board = ({ board, player, onClick, winner, colors }) => {
    // Function that renders counters for a given row      
    const renderCounters = (row, rowIndex) =>           
        row.map((counter, columnIndex) => {
            // Whether the counter has been placed or not
            const selected = (counter === null) ? false : true;
            const counterProps = {
                selected,
                color: selected ? colors[counter] : colors[player],
                key: rowIndex + ':' + columnIndex,
                onClick: !selected ? e => onClick(player, columnIndex) : null,
                enabled: !winner
            };
            // If there's a winner, check if this is a winning counter, and mark it
            if (winner)
                for (const coord of winner.coordinates) {
                    if (rowIndex === coord.row && columnIndex === coord.column) 
                        counterProps.marked = true;
                }
            return <Counter {...counterProps} />;
        });
    
    // Renders multiple rows
    const connect4 = board.map((row, rowIndex) => {
        // For each row, render counters
        return ( 
            <div className="row" key={rowIndex}>
                { renderCounters(row, rowIndex) }
            </div>
        );
    });
    
    return (
        <CenterDiv>
            <StyledBoard>
                { connect4 }
            </StyledBoard>
        </CenterDiv>
    );
};

Board.defaultProps = {
    board: [],
    onClick: () => {},
    colors: ["red", "green", "blue"]
};

// A styled div component that represents the connect4 board
const StyledBoard = styled.div`
    background: rgb(20,50,200);
    display: inline-block;
    padding: 10px;
    border: 5px solid black;
    border-radius: 10px;
    position: relative;
    margin: 20px auto;
    background: linear-gradient(-45deg, rgba(0,0,0,0) 25%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.2) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgba(255,255,255,0.2) 75%), linear-gradient(45deg, rgba(0,0,0,0) 25%, rgba(255,255,255,0.2) 25%, rgba(255,255,255,0.2) 50%, rgba(0,0,0,0) 50%, rgba(0,0,0,0) 75%, rgba(255,255,255,0.2) 75%), rgb(0, 153, 151);
    min-width: 335px
    white-space: nowrap;
`;

// A styled div component that allows inner div centering
const CenterDiv = styled.div`
    width: 100%;
    text-align: center;
`;

export default Board;