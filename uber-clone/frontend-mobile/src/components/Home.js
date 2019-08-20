import React, { Component } from 'react';
import styled from 'styled-components/native';

import Map from './Map';

export default class Home extends Component {

    render() {
        return (
            <Container>

                <Map />

            </Container>
        );
    }
}

const Container = styled.SafeAreaView`
    flex: 1;
    /*align-items: center;
    justify-content: center;*/
`;