import React from 'react';
import styled from 'styled-components';

import Counter from './Counter';

const Board = props => {
    props.board.map(row => 
        <div class="row">
            {row.map(column => {
                <Counter selected={false} color="red" />;
            })}
        </div>
    );
    return (
        <StyledBoard>
            
        </StyledBoard>
    );
};

Board.defaultProps = {
    board: []
};

const StyledBoard = styled.div`
    background: rgb(20,50,200);
    display: inline-block;
    padding: 0;
`;


export default Board;