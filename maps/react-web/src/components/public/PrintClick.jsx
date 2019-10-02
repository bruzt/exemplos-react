import React from 'react';
import styled from 'styled-components';

import mapaImg from '../../assets/img/map.png'

export default class PrintClick extends React.Component {

    constructor(props){
        super(props);

        document.title = 'Mapa'
    }

    render(){

        return (
            <Container>

                <StyledP>
                    <a target='_blank' href="https://www.google.com/maps/place/Correios/@-22.4823912,-47.4594919,18.25z/data=!4m5!3m4!1s0x94c7d6086c86355d:0x239c6c8141ae96c3!8m2!3d-22.4823417!4d-47.4595521">
                        <MapImg src={mapaImg} />
                    </a>
                </StyledP>

            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const StyledP = styled.p`
    width: 50%;
    height: 75%;
`;

const MapImg = styled.img`
    width: 100%;
`;