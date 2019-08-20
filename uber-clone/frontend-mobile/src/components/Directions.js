import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

export default function Directions(props) {
    return (
        <MapViewDirections 
            destination={props.destination}
            origin={props.origin}
            onReady={props.onReady}
            apikey='AIzaSyBwol5k-MIJjCHuR2Lz97cjsb-6fLeVFR4'
            strokeWidth={3}
            strokeColor='#222'
        />
    );
}
