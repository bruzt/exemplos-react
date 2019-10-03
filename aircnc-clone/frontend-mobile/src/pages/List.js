import React, { useState, useEffect } from 'react';
import { AsyncStorage, Platform, ScrollView } from 'react-native';
import styled from 'styled-components/native';

import SpotList from '../components/SpotList';

import logoImage from '../assets/img/logo.png';

export default function(props) {

    const [techsState, setTechs] = useState([]);

    useEffect(() => {

        AsyncStorage.getItem('techs').then( (techs) => {    

            techsArray = techs.split(',').map((tech) => tech.trim());

            setTechs(techsArray);
        });

    }, []);

 
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