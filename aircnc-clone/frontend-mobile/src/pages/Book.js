import React, { useState } from 'react';
import { AsyncStorage, Alert } from 'react-native';
import styled from 'styled-components/native';

import api from '../services/api';

export default function Booking(props) {

    const [dateState, setDate] = useState('');

    const SpotId = props.navigation.getParam('id');

    ////////////////////////////////////////////

    async function handleSubmit(){

        try {

            const userId = await AsyncStorage.getItem('user');

            await api.post(`/spots/${SpotId}/booking`, {
                date: dateState
            }, {
                headers: {
                    user_id: userId
                }
            });
            
            Alert.alert('Solicitação de reserva enviada.');

            props.navigation.navigate('List');

        } catch (error) {
            console.log(error);
        }
    }

    function handleCancel(){

        props.navigation.navigate('List');
    }

    return (
        <Container>
            
            <Label>DATA DE INTERESSE *</Label>
            <Input 
                placeholder='Qual data você quer reservar?'
                placeholderTextColor='#999'         
                autoCapitalize='words'        
                autoCorrect={false}  
                value={dateState}
                onChangeText={(text) => setDate(text)}
            />

            <Button onPress={() => handleSubmit()}>
                <ButtonText>Solicitar Reserva</ButtonText>
            </Button>

            <CancelButton onPress={() => handleCancel()}>
                <ButtonText>Cancelar</ButtonText>
            </CancelButton>

        </Container>
    );
}

const Container = styled.View`
    margin: 30px;
`;

const Label = styled.Text`
    font-weight: bold;
    color: #444;
    margin: 30px 0 8px 0;
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

const CancelButton = styled(Button)`
    background-color: #CCC;
    margin: 10px 0 0 0;
`;