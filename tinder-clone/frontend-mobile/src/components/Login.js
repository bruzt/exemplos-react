import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import styled from 'styled-components/native';

import api from '../services/api';

import logo from '../assets/img/logo.png';

export default function login(props) {

    const [username, setUsername] = useState('');

    useEffect( () => {

        AsyncStorage.getItem('user')
        .then( (user) => {

            if(user){

                props.navigation.navigate('Home', { user });
            }
        });

    }, []);

    async function handleLogin(){

        try {

            const response = await api.post('/devs', { username }); 
            
            const id = response.data._id;   

            await AsyncStorage.setItem('user', id);
            
            props.navigation.navigate('Home', { user: id });
            
        } catch (error) {
            console.log('Error', error);
        }
    }

    return (
        <Container behavior='padding'>

            <Logo source={logo} />

            <Input
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Digite seu usuario no Github'
                placeholderTextColor='#999'
                value={username}
                onChangeText={(text) => setUsername(text)}
            />

            <LoginButton onPress={handleLogin}>
                <ButtonText>
                    Entrar
                </ButtonText>
            </LoginButton>

        </Container>
    );
}

const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
    background: #F5F5F5;
    padding: 30px;
`;

const Logo = styled.Image`

`;

const Input = styled.TextInput`
    height: 46px;
    align-self: stretch;
    background: #FFF;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-top: 20px;
    padding: 0 15px;
`;

const LoginButton = styled.TouchableOpacity`
    height: 46px;
    align-self: stretch;
    background: #df4723;
    border-radius: 4px;
    margin-top: 10;
    justify-content: center;
    align-items: center;
`;

const ButtonText = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;
