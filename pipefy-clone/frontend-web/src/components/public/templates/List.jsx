import React from 'react';
import styled from 'styled-components';
import { MdAdd } from 'react-icons/md'

import Card from './Card';

export default (props) => {

    return (
        <Container done={props.data.done}>

            <header>
                <h2>{props.data.title}</h2>

                {props.data.creatable && (

                    <button type='button'>
                        <MdAdd size={24} color={'#FFF'} />
                    </button>
                )}

            </header>

            <ul>
                {props.data.cards.map( (card, index) => {
                    return (
                        <Card key={card.id} index={index} listIndex={props.index} data={card} />
                    );
                })}
            </ul>

        </Container>
    );
}

const Container = styled.div`
    padding: 0 15px;
    height: 100%;
    flex: 0 0 320px; /* flex-grow, flex-shrink flex-basis */
    opacity: ${(props) => props.done ? 0.6 : 1};

    & + div { /* pega uma div que antes dela tem outra div (pula a primeira) */
        border-left: 1px solid rgba(0,0,0, 0.05);
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 42px;

        h2 {
            font-weight: 500;
            font-size: 16px;
            padding: 0 10px;
        }

        button {
            width: 42px;
            height: 42px;
            border-radius: 18px;
            background: #3b5bfd;
            border: 0;
            cursor: pointer;
        }
    }

    ul {
        margin-top: 30px;
    }
`;