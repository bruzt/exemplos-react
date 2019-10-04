import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import socketio from 'socket.io-client';

import api from '../../services/api';

export default class Dashboard extends Component {

    constructor(props){
        super(props);

        document.title = 'Dashboard';

        this.state = {
            spots: [],
            requests: []
        }

        this.userId = localStorage.getItem('user');

        this.loadSpots();
        this.initSocket();
    }

    async loadSpots(){

        const response = await api.get('/dashboards', {
            headers: {
                user_id: this.userId
            }
        });

        this.setState({ spots: response.data });
    }

    initSocket(){

        const socket = socketio('http://192.168.1.119:3001', {
            query: { user_id: this.userId }
        });

        socket.on('booking_request', (data) => {

            this.setState({ requests: [...this.state.requests, data] });
        });
    }

    async handleAccept(requestId){

        try {

            await api.post(`/bookings/${requestId}/approvals`);

            const requests = this.state.requests.filter( (request) => request._id !== requestId);

            this.setState({ requests });
            
        } catch (error) {
            console.error(error);
        }
    }

    async handleReject(requestId){
        
        try {

            await api.post(`/bookings/${requestId}/rejections`);

            this.setState({ requests: this.state.requests.filter( (request) => request._id !== requestId) });
            
        } catch (error) {
            console.error(error);
        }
    }

    render() {

        return (
            <>
                <UlNotifications>
                    {this.state.requests.map( (request, index) => {
                        return (
                            <li key={index}>
                                <p>
                                    <strong>{request.user.email}</strong> está solicitando uma reserva em <strong>{request.spot.company}</strong> para a data: <strong>{request.date}</strong>.
                                </p>
                                <ButtonAccept className='accept' onClick={() => this.handleAccept(request._id)}>Aceitar</ButtonAccept>
                                <ButtonReject className='reject' onClick={() => this.handleReject(request._id)}>Rejeitar</ButtonReject>
                            </li>
                        );
                    })}
                </UlNotifications>

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

const UlNotifications = styled.ul`
    margin: 0 0 15px 0;

    li {
        margin: 10px 0 0 0;
        font-size: 16px;
        line-height: 24px;
        border-bottom: 0.1px solid gray;
    }
`;

const ButtonStyled = styled.button`
    margin: 0px 10px 10px 0;
    border: 0;
    font-weight: bold;
    cursor: pointer;
    background-color: #FFF;
`;

const ButtonAccept = styled(ButtonStyled)`
    color: #84c870;
`;

const ButtonReject = styled(ButtonStyled)`
    color: #e55e5e;
`;