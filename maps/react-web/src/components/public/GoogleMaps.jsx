import React from 'react';
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';

import Marker from './Marker';

export default class Home extends React.Component {

    constructor(props){
        super(props);

        document.title = 'React Home';

        this.key = require('../../env.json').key;
    }

    render() {
        return (
            <Container>

                <MapContainer>

                    <GoogleMapReact
                        bootstrapURLKeys={{ key: this.key }}
                        defaultCenter={{ lat: -22.481209, lng: -47.457174 }}
                        defaultZoom={15}
                    >
                        <Marker
                            lat={-22.481209}
                            lng={-47.457174}
                            text='Marker'
                        />
                    </GoogleMapReact>

                </MapContainer>

            </Container>
        );
    }
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

const MapContainer = styled.div`
    width: 50%;
    height: 75%;
`;