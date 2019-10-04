import React, { useState, useEffect } from 'react';
import { AsyncStorage, Platform, ScrollView, Alert } from 'react-native';
import styled from 'styled-components/native';
import socketio from 'socket.io-client';

import SpotList from '../components/SpotList';

import logoImage from '../assets/img/logo.png';

export default function(props) {

    const [techsState, setTechs] = useState([]);

    useEffect(() => {

        getTechs();
        initSocket();

    }, []);

    async function getTechs(){

        try {
            
            const techs = await AsyncStorage.getItem('techs');
    
            techsArray = techs.split(',').map((tech) => tech.trim());
    
            setTechs(techsArray);
            
        } catch (error) {
            console.log(error);
        }
    }

    async function initSocket(){

        try {

            const user_id = await AsyncStorage.getItem('user');

            const socket = socketio('http://192.168.1.119:3001', {
                query: { user_id }
            });
    
            socket.on('booking_response', (data) => {
    
                Alert.alert(`Sua reserva em ${data.spot.company} em ${data.date} foi ${(data.approved) ? 'Aprovada' : 'Rejeitada'}`);
            });
            
        } catch (error) {
            console.log(error);            
        }
    }
 
    return (
        <Container>

            <Logo source={logoImage} />

            <ScrollView>
                {techsState.map((tech, index) => {
                    return <SpotList key={index} tech={tech} />
                })}
            </ScrollView>

        </Container>
    );
}

const Container = styled.SafeAreaView`
    flex: 1;
    padding: ${(Platform.OS === 'ios') ? 0 :  '40px 0 0 0'};
`;

const Logo = styled.Image`
    height: 32px;
    resize-mode: contain;
    align-self: center;
`;