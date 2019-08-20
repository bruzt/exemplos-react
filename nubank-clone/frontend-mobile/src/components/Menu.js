import React from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';
import QRCode from 'react-native-qrcode';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function Menu(props) {

    return (
        <Container
            style={{
                opacity: props.translateY.interpolate({
                    inputRange: [0, 150],
                    outputRange: [0, 1]
                })
            }}
        >
            <Code>
                <QRCode 
                    value={'https://nubank.com.br'} 
                    size={80} 
                    bgColor='#8B10AE' 
                    fgColor='#FFF'
                />
            </Code>

            <Nav>
                <NavItem>
                    <Icon name='help-outline' size={20} color='#FFF' />
                    <NavText>
                        Me Ajuda
                    </NavText>
                </NavItem>
                <NavItem>
                    <Icon name='person-outline' size={20} color='#FFF' />
                    <NavText>
                        Meu Perfil
                    </NavText>
                </NavItem>
                <NavItem>
                    <Icon name='credit-card' size={20} color='#FFF' />
                    <NavText>
                        Configurar Cartão
                    </NavText>
                </NavItem>
                <NavItem>
                    <Icon name='smartphone' size={20} color='#FFF' />
                    <NavText>
                        Configurações do App
                    </NavText>
                </NavItem>
            </Nav>

            <SignOutButton onPress={() => {}}>
                <SignOutButtonText>
                    SAIR DO APP
                </SignOutButtonText>
            </SignOutButton>

        </Container>
    );
}

const Container = styled(Animated.ScrollView)`
    margin: 0 30px;
`;

const Code = styled.View`
    overflow: hidden;
    background: #FFF;
    padding: 10px;
    align-self: center;
`;

const Nav = styled.View`
    margin-top: 30px;
    border-top-width: 0.33px;
    border-top-color: rgba(255,255,255,0.8);
`;

const NavItem = styled.View`
    flex-direction: row;
    align-items: center;
    padding: 12px 0;
    border-bottom-width: 0.33px;
    border-bottom-color: rgba(255,255,255,0.8);
`;

const NavText = styled.Text`
    font-size: 15px;
    color: #FFF;
    margin-left: 20px;
`;

const SignOutButton = styled.TouchableOpacity`
    border-width: 0.33px;
    border-color: rgba(255,255,255,0.8);
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    padding: 12px;
    margin-top: 15px;
`;

const SignOutButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 13px;
`;
