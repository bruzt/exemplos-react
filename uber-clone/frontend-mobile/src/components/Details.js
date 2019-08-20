import React from 'react';
import styled from 'styled-components/native';

import uberx from '../assets/img/uberx.png';

export default function Details() {
    return (
        <Container>

            <TypeTitle>Popular</TypeTitle>
            <TypeDescription>Viagens baratas para o dia a dia</TypeDescription>

            <TypeImage source={uberx} />
            <TypeTitle>UberX</TypeTitle>
            <TypeDescription>R$6,00</TypeDescription>

            <RequestButton onPress={() => {}}>
                <RequestButtonText>SOLICIATAR UBERX</RequestButtonText>
            </RequestButton>

        </Container>
    );
}


const Container = styled.View`
    background: #fff;
    height: 300px;
    width: 100%;
    position: absolute;
    bottom: 0;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.2;
    shadow-radius: 10;
    elevation: 3;
    border: 1px solid #ddd;
    align-items: center;
    padding: 20px;
`;

const TypeTitle = styled.Text`
    font-size: 20px;
    color: #222;
`;

const TypeDescription = styled.Text`
    color: #666;
    font-size: 14px;
`;

const TypeImage = styled.Image`
    height: 80px;
    margin: 10px 0;
`;

const RequestButton = styled.TouchableOpacity`
    background: #222;
    justify-content: center;
    align-items: center;
    height: 44px;
    align-self: stretch;
    margin-top: 10px;
`;

const RequestButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 18px;
`;
