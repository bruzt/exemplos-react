import React from 'react';
import styled from 'styled-components/native';

import logo from '../../assets/imgs/Nubank_Logo.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Header() {

    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Nubank</Title>
            </Top>
            <Icon name='keyboard-arrow-down' size={20} color='#FFF' />
        </Container>
    );
}

const Container = styled.View`
    align-items: center;
    padding: 40px 0 30px 0;
`;

const Top = styled.View`
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
`;

const Logo = styled.Image`

`;

const Title = styled.Text`
    font-size: 18px;
    color: #FFF;
    font-weight: bold;
    margin-left: 8px;
`;