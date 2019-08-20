import React, { useRef, useContext } from 'react';
import styled, { css } from 'styled-components';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from './context';

export default (props) => {

    const ref = useRef();
    const { move } = useContext(BoardContext);

    const [{ isDragging }, dragRef] = useDrag({
        item: { type: 'CARD', index: props.index, listIndex: props.listIndex /*, id: props.data.id, content: data.content*/ },
        collect: (monitor) => {
            return {
                isDragging: monitor.isDragging()
            }
        }
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            
            const draggedListIndex = item.listIndex;
            const targetListIndex = props.listIndex;
            const draggedIndex = item.index;
            const targetIndex = props.index;

            if(draggedIndex === targetIndex && draggedListIndex === targetListIndex) return;

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) /2;

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if(draggedIndex < targetIndex && draggedTop < targetCenter){ // verifica se esta colocando na msm posição (card abaixo)
                return;
            }

            if(draggedIndex > targetIndex && draggedTop > targetCenter){ // verifica se esta colocando na msm posição (card acima)
                return;
            }

            move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

            item.index = targetIndex;
            item.listIndex = targetListIndex;
        }
    });

    dragRef(dropRef(ref));

    return (
        <Container ref={ref} isDragging={isDragging}>

            <header>
                {props.data.labels.map( (label, index) => {
                    return (
                        <Span key={index} color={label} />
                    );
                })}
                
            </header>
            <p>{props.data.content}</p>

            {props.data.user && (
                <img src={props.data.user} alt='' />
            )}
            
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    background: #FFF;
    border-radius: 5px;
    margin-bottom: 10px;
    padding: 15px;
    box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
    border-top: 20px solid rgba(230, 236, 245, 0.55);
    cursor: grab;

    header {
        position: absolute;
        top: -22px;
        left: 15px;
    }

    p {
        font-weight: 500;
        line-height: 20px; /* espaço entre as linhas */
    }

    img {
        width: 24px;
        height: 24px;
        border-radius: 2px;
        margin-top: 5px;
    }

    ${(props) => props.isDragging && css`

        border: 2px dashed rgba(0,0,0,0.2);
        padding-top: 31px;
        border-radius: 0;
        background: transparent;
        box-shadow: none;
        cursor: grabbing;

        p, img, header {
            opacity: 0;
        }
    `}
`;

const Span = styled.span`
    width: 10px;
    height: 10px;
    border-radius: 2px;
    display: inline-block;
    background: ${(props) => props.color};
`;