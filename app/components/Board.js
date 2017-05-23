import React from 'react';
import styled from 'styled-components';

import Counter from './Counter';

const Board = props => {
    const board = props.board.map((row, rowIndex) => 
        <div className="row" key={rowIndex}>
            {row.map((counter, columnIndex) => {
                const colors = ["red", "green", "blue"];
                const selected = (counter === null) ? false : true;
                const counterProps = {
                    selected,
                    color: selected ? colors[counter] : colors[props.player],
                    key: rowIndex + ':' + columnIndex,
                    onClick: !selected ? e => props.onClick(props.player, columnIndex) : null,
                };
                return <Counter {...counterProps} />;
            })}
        </div>
    );
    return (
        <StyledBoard>
            {board}
        </StyledBoard>
    );
};

Board.defaultProps = {
    board: [],
    onClick: () => {}
};

const StyledBoard = styled.div`
    background: rgb(20,50,200);
    display: inline-block;
    padding: 0;
`;


export default Board;