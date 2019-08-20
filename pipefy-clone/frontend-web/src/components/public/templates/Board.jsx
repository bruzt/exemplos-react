import React, { useState } from 'react';
import styled from 'styled-components';
import produce from 'immer';

import BoardContext from './context';

import { loadLists } from '../../../services/api';

import List from './List';

export default (props) => {

    const data = loadLists();

    const [lists, setLists] = useState(data);

    function move(fromList, toList, from, to){
        
        setLists(produce(lists, (draft) => {

            const dragged = draft[fromList].cards[from];

            draft[fromList].cards.splice(from, 1);
            draft[toList].cards.splice(to, 0, dragged);
        }));
    }

    return (
        <BoardContext.Provider value={{ lists, move }}>
            <Container>
                {lists.map( (list, index) => {
                    return (
                        <List key={index} index={index} data={list} />
                    );
                })}

            </Container>
        </BoardContext.Provider>
    );
}

const Container = styled.div`
    display: flex;
    padding: 30px 0;
    height: calc(100% - 80px);
`;
