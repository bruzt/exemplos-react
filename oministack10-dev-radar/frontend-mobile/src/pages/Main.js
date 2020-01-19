import React, { useState, useEffect } from 'react';
import styled from 'styled-components/native';
import MapView, { Marker, Callout } from 'react-native-maps';
import { requestPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import { MaterialIcons } from '@expo/vector-icons';

import api from '../services/api';
import { connect, subscribeToNewDevs, isConnected, emitMessage } from '../services/socket';

export default function Main(props) {

    const [currentRegionState, setCurrentRegion] = useState(null);
    const [devsState, setDevs] = useState([]);
    const [techsState, setTechs] = useState('');

    useEffect(() => {

        getInitialPosition();

    }, []);

    useEffect( () => {

        getDevs();

    }, [currentRegionState]);

    useEffect( () => {

        subscribeToNewDevs( (dev) => {

            setDevs([ ...devsState, dev ]);
        });

    }, [devsState]);

    async function getInitialPosition() {

        try {

            const { granted } = await requestPermissionsAsync();

            if (granted) {

                const { coords } = await getCurrentPositionAsync({
                    enableHighAccuracy: true
                });

                const { latitude, longitude } = coords;

                setCurrentRegion({
                    latitude,
                    longitude,
                    latitudeDelta: 0.04,
                    longitudeDelta: 0.04
                });
            }

        } catch (error) {
            console.log(error);
        }
    }

    async function getDevs(){

        if(currentRegionState){

            try {
    
                const { latitude, longitude } = currentRegionState;
                
                const response = await api.get('/search', {
                    params: {
                        latitude,
                        longitude,
                        techs: techsState.toLowerCase()
                    }
                });
    
                setDevs(response.data);
    
                setupWebSocket();
                  
            } catch (error) {
                console.log(error);
            }
        }
    }

    function setupWebSocket(){

        const { latitude, longitude } = currentRegionState;
        
        if(! isConnected()){
            
            connect(latitude, longitude, techsState);
            return;
        }
        
        emitMessage('new-region', { latitude, longitude, techs: techsState });
    }

    function handleRegionChange(region){
                
        setCurrentRegion(region);
    }

    function renderMarkers(){

        return devsState.map( (dev, index) => {

            return (
                <Marker
                    key={index}
                    coordinate={{
                        latitude: dev.location.coordinates[1],
                        longitude: dev.location.coordinates[0]
                    }}
                >

                    <MakerImage
                        source={{
                            uri: dev.avatar_url
                        }}
                        width={54}
                        height={54}
                    />

                    <Callout
                        onPress={() => {
                            props.navigation.navigate('Profile', { github_username: dev.github_username })
                        }}
                    >
                        <CalloutView>
                            <DevNameText>{dev.name}</DevNameText>
                            <DevBioText>{dev.bio}</DevBioText>
                            <DevTechsText>{dev.techs.join(', ')}</DevTechsText>
                        </CalloutView>
                    </Callout>

                </Marker>
            );
        });
    }

    if (!currentRegionState) {
        return null;
    }

    return (
        <>

            <SearchView>
                <SearchTextInput 
                    placeholder='Buscar devs por tecnologias...'
                    placeholderTextColor='#999'
                    autoCapitalize='words'
                    autoCorrect={false}
                    value={techsState}
                    onChangeText={(text) => setTechs(text)}
                />
                <SearchButton onPress={() => getDevs()}>
                    <MaterialIcons name='my-location' size={20} color='#fff' />
                </SearchButton>
            </SearchView>

            <Map 
                initialRegion={currentRegionState}
                onRegionChangeComplete={handleRegionChange}
            >
                {renderMarkers()}
            </Map>

        </>
    );
}

const Map = styled(MapView)`
    flex: 1;
`;

const MakerImage = styled.Image`
    width: 54px;
    height: 54px;
    border-width: 4px;
    border-color: #fff;
    border-radius: 4px;
`;

const CalloutView = styled.View`
    width: 260px;
`;

const DevNameText = styled.Text`
    font-weight: bold;
    font-size: 16px;
`;

const DevBioText = styled.Text`
    color: #666;
    margin-top: 5px;
`;

const DevTechsText = styled.Text`
    margin-top: 5px;
`;

const SearchView = styled.View`
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    z-index: 10;
    flex-direction: row;
`;

const SearchTextInput = styled.TextInput`
    flex: 1;
    height: 50px;
    background-color: #fff;
    color: #333;
    border-radius: 25;
    padding: 0 20px;
    font-size: 16px;
    shadow-color: #000;
    shadow-opacity: 0.2;
    shadow-offset: 4px 4px;
    elevation: 2;
`;

const SearchButton = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    background-color: #8e4dff;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    margin-left: 15px;
`;