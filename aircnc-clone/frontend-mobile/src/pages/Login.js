import React, { Component } from 'react';
import { Platform, AsyncStorage } from 'react-native';
import styled from 'styled-components/native';

import api from '../services/api';

import logoImage from '../assets/img/logo.png';

export default class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            techs: ''
        }

        this.loadUser();
    }

    async loadUser(){

        try {

            const user = await AsyncStorage.getItem('user');
    
            if(user) this.props.navigation.navigate('List');
            
        } catch (error) {
            console.log(error);
        }
    }

    async handleSubmit(){

        try {
            
            const response = await api.post('/sessions', {
                email: this.state.email
            });

            const { _id } = response.data;

            if(! _id) return;

            await AsyncStorage.setItem('user', _id);
            await AsyncStorage.setItem('techs', this.state.techs.toLowerCase());

            this.props.navigation.navigate('List');
            
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        return (
            <Container behavior='padding' enabled={(Platform.OS === 'ios') ? true : false}>

                <Logo source={logoImage} />

                <Form>
                    <Label>SEU E-MAIL *</Label>
                    <Input 
                        placeholder='Seu e-mail'
                        placeholderTextColor='#999'         
                        keyboardType='email-address'
                        autoCapitalize='none'        
                        autoCorrect={false}  
                        value={this.state.email}
                        onChangeText={(text) => this.setState({ email: text})}
                    />

                    <Label>TECNOLOGIAS *</Label>
                    <Input 
                        placeholder='Tecnologias de interesse'
                        placeholderTextColor='#999'         
                        autoCapitalize='words'        
                        autoCorrect={false}  
                        value={this.state.techs}
                        onChangeText={(text) => this.setState({ techs: text})}
                    />
                    <Button onPress={() => this.handleSubmit()}>
                        <ButtonText>Encontrar Spots</ButtonText>
                    </Button>
                </Form>

            </Container>
        );
    }
}

const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.Image`

`;

const Form = styled.View`
    align-self: stretch;
    padding: 0 30px;
    margin-top: 30px;
`;

const Label = styled.Text`
    font-weight: bold;
    color: #444;
    margin-bottom: 8;
`;

const Input = styled.TextInput`
    border: 1px solid #ddd;
    padding: 0 20px;
    font-size: 16px;
    color: #444;
    height: 44px;
    margin: 0 0 20px 0;
    border-radius: 2px;
`;

const Button = styled.TouchableOpacity`
    height: 42px;
    background-color: #f05a5b;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
`;

const ButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 16px;
`;