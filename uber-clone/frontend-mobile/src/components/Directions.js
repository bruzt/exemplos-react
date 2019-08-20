import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const APIKEY = require('../../env.json').APIKEY;

export default function Directions(props) {
    return (
        <MapViewDirections 
            destination={props.destination}
            origin={props.origin}
            onReady={props.onReady}
            apikey={APIKEY}
            strokeWidth={3}
            strokeColor='#222'
        />
    );
}
