import React, { Component } from 'react';
//import { View } from 'react-native';
import styled from 'styled-components/native';

import api from '../services/api';

export default class components extends Component {

    constructor(props){
        super(props);

        this.state = {

        }

        this.loadSpots();
    }

    async loadSpots(){

        try {

            const response = await api.get('/spots', {
                params: {
                    tech: this.props.tech
                }
            });

            console.log(response.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    render() {

        return (
            <Container>

                <Tex>{this.props.tech}</Tex>

            </Container>
        );
    }
}

const Container = styled.View`

`;

const Tex = styled.Text`

`;