import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Header from '../common/Header';
import Board from './templates/Board';

export default class Home extends React.Component {

    componentWillMount(){
        document.title = 'Pipefy-clone';
    }

    render() {
        return (
            <DndProvider backend={HTML5Backend}>
         
                <Header />

                <Board />

            </DndProvider>
        );
    }
}