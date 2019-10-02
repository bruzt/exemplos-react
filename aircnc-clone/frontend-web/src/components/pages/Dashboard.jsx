import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import api from '../../services/api';

export default class Dashboard extends Component {

    constructor(props){
        super(props);

        document.title = 'Dashboard';

        this.state = {
            spots: []
        }

        this.userId = localStorage.getItem('user');

        this.loadSpots();
    }

    async loadSpots(){

        const response = await api.get('/dashboards', {
            headers: {
                user_id: this.userId
            }
        });

        this.setState({ spots: response.data });
    }

    render() {

        return (
            <>
                <SpotList>
                    {this.state.spots.map( (spot, index) => (
                            <li key={index}>
                                <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
                                <strong>{spot.company}</strong>
                                <span>{(spot.price) ? `R$ ${spot.price}/dia` : 'Gratuito'}</span>
                            </li>
                        )
                    )}
                </SpotList>

                <Link to='/newspot'>
                    <button className='btn'>Cadastrar novo Spot</button> 
                </Link>
            </>
        );
    }
}

const SpotList = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 30px;

    li {
        display: flex;
        flex-direction: column;

        header {
            width: 100%;
            height: 120px;
            background-size: cover;
            border-radius: 4px;
        }

        strong {
            margin-top: 10px;
            font-size: 24px;
            color: #444;
        }

        span {
            font-size: 15px;
            color: #999;
        }
    }
`;
