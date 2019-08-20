import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components/native';
import { Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';

const APIKEY = require('../../env.json').APIKEY;
Geocoder.init(APIKEY);

import { getPixelSize } from "../util/utils";

import markerImage from '../assets/img/marker.png';
import backImage from '../assets/img/back.png';

import Search from './Search';
import Directions from './Directions';
import Details from './Details';

export default (props) => {

    const [region, setRegion] = useState(null);
    const [destination, setDestination] = useState(null);
    const [location, setLocation] = useState(null);
    const [duration, setDuration] = useState(null);


    useEffect( () => {

        getLocation();

    }, []);


    function getLocation(){

        navigator.geolocation.getCurrentPosition(
            async (position) => { // sucesso

                const response = await Geocoder.from({ 
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })

                const address = response.results[0].formatted_address;
                const location = address.substring(0, address.indexOf(','));

                setLocation(location);

                setRegion({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: 0.0143,
                    longitudeDelta: 0.0134 
                });
            },

            () => { // erro

            },

            { // settings
                timeout: 2000,
                enableHighAccuracy: true,
                maximumAge: 1000
            }
        );
    }


    function handleLocationSelected(data, details){

        setDestination({
            latitude: details.geometry.location.lat,
            longitude: details.geometry.location.lng,
            title: data.structured_formatting.main_text
        });
    }


    function handleBack(){

        setDestination(null);
    }


    return (
        <React.Fragment>
            <Map
                region={region}
                showsUserLocation={true}
                loadingEnabled={true}
                ref={(element) => this.mapView = element}
            >
                {destination && (
                    <React.Fragment>
                        <Directions 
                            origin={region}
                            destination={destination}
                            onReady={(result) => {

                                setDuration(Math.floor(result.duration));

                                this.mapView.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        top: getPixelSize(50),
                                        right: getPixelSize(50),
                                        bottom: getPixelSize(50),
                                        left: getPixelSize(350)
                                    }
                                });
                            }}
                        />
                        <Marker 
                            coordinate={destination}
                            anchor={{ x: 0, y: 0 }}
                            image={markerImage}
                        >
                            <LocationBox>
                                <LocationText>
                                    {destination.title}
                                </LocationText>
                            </LocationBox>
                        </Marker>

                        <Marker 
                            coordinate={region}
                            anchor={{ x: 0, y: 0 }}
                        >
                            <LocationBox>
                                <LocationTimeBox>
                                    <LocationTimeText>{duration}</LocationTimeText>
                                    <LocationTimeTextSmall>MIN</LocationTimeTextSmall>
                                </LocationTimeBox>
                                <LocationText>{location}</LocationText>
                            </LocationBox>
                        </Marker>
                    </React.Fragment>
                )}
            </Map>

            {(destination) ? (
                <React.Fragment>

                    <BackButton onPress={() => {handleBack}}>
                        <BackImage source={backImage} />
                    </BackButton>

                    <Details />

                </React.Fragment>
             ) : (

                <Search onLocationSelected={handleLocationSelected} />
             )}

        </React.Fragment>
    );
}


const Map = styled(MapView)`
    flex: 1;
`;

const LocationBox = styled.View`
    background: #fff;
    shadow-color: #000;
    shadow-offset: 0 0;
    shadow-opacity: 0.1;
    elevation: 1;
    border: 1px solid #ddd;
    border-radius: 3px;
    flex-direction: row;

    ${Platform.select({
        ios: css`
            margin-top: 20px;
        `,

        android: css`
            margin-top: 10px;
            margin-left: 10px;
        `
    })}
`;

const LocationText = styled.Text`
    margin: 8px 10px;
    font-size: 14px;
    color: #333;
`;

const LocationTimeBox = styled.View`
    background: #222;
    padding: 3px 8px;
`;

const LocationTimeText = styled.Text`
    color: #fff;
    font-size: 12px;
    text-align: center;
`;

const LocationTimeTextSmall = styled.Text`
    color: #fff;
    font-size: 10px;
    text-align: center;
`;

const BackButton = styled.TouchableOpacity`
    position: absolute;
    top: ${Platform.select({ ios: 60, android: 40 })}px;
    left: 20px;
`;

const BackImage = styled.Image`

`;

