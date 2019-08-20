import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import io from 'socket.io-client';

import api from '../services/api';

import logo from '../assets/img/logo.svg'
import like from '../assets/img/like.svg'
import dislike from '../assets/img/dislike.svg'
import itsAMatch from '../assets/img/itsamatch.png'

export default function Home(props) {

    document.title = 'Tinder-clone Home';

    const [devList, setDevList] = useState([]);

    const [matchDev, setMatchDev] = useState(null);
    

    useEffect( () => {

        async function loadUsers(){

            const response = await api.get('/devs', {
                headers: {
                    user: props.match.params.id
               }
            });

            setDevList(response.data);
        }

        loadUsers();

    }, [props.match.params.id]);


    useEffect( () => {

        const socket = io('http://localhost:3001', {
            query: { user: props.match.params.id }
        });

        socket.on('match', (dev) => {
            
            setMatchDev(dev);
        });

    }, [props.match.params.id]);


    async function onLike(to){

        try {

            await api.post(`/devs/${to}/likes`, null, {
                headers: {
                    user: props.match.params.id
                }
            });

            setDevList(devList.filter( (dev) => dev._id !== to));
            
        } catch (error) {
            console.log('error', error);
        }
    }


    async function onDislike(to){
        
        try {

            await api.post(`/devs/${to}/dislikes`, null, {
                headers: {
                    user: props.match.params.id
                }
            });

            setDevList(devList.filter( (dev) => dev._id !== to));
            
        } catch (error) {
            console.log('error', error);
        }
    }


    function renderCards(){

        return devList.map( (dev, index) => {

            return (
                <li key={index}>
                    <img src={dev.avatar} alt=""/>
                    <footer>
                        <strong>{dev.name}</strong>
                        <p>{dev.bio}</p>
                    </footer>

                    <div className='buttons'>
                        <button type='button' onClick={() => onLike(dev._id)}>
                            <img src={like} alt="like"/>
                        </button>
                        <button type='button' onClick={() => onDislike(dev._id)}>
                            <img src={dislike} alt="dislike"/>
                        </button>
                    </div>
                </li>
            );
        });
    }


    return (
        <Container>

            <Link to='/'>
                <img src={logo} alt='logo' />
            </Link>

            {(devList.length > 0) ? (

                <ul>

                    {renderCards()}     

                </ul>

            ) : (

                <div className="empty">Acabou :(</div>

            )}

            {(matchDev) && (
                <div className="match-container">
                    <img src={itsAMatch} alt="match" />
                    <img className='avatar' src={matchDev.avatar} alt='' />
                    <strong>{matchDev.name}</strong>
                    <p>{matchDev.bio}</p>

                    <button type='button' onClick={() => setMatchDev(null)}>Fechar</button>
                </div>
            )}

        </Container>
    );
}

const Container = styled.div`
    max-width: 980px;
    margin: 0 auto;
    padding: 50px 0;
    text-align: center;

    ul {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 30px;
        margin-top: 50px;
    }
    
    ul li {
        display: flex;
        flex-direction: column;
    }

    ul li img {
        max-width: 100%;
        border-radius: 5px 5px 0 0;

    }

    ul li footer {
        flex: 1;
        background: #FFF;
        border: 1px solid #eee;
        padding: 15px 20px;
        text-align: left;
        border-radius: 0 0 5px 5px;
    }

    ul li footer strong {
        font-size: 16px;
        color: #333;
    }

    ul li footer p {
        font-size: 14px;
        line-height: 20px;
        color: #999;
        margin-top: 5px;
    }

    ul li .buttons {
        margin-top: 10px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 10px;
    }

    ul li .buttons button {
        height: 50px;
        box-shadow: 0 2px 2px 0 rgba(0,0,0,0.05);
        border: 0;
        border-radius: 4px;
        background: #FFF;
        cursor: pointer;
    }

    ul li .buttons button:hover img {
        transform: translateY(-5px);
        transition: all 0.2s;
    }

    .empty {
        font-size: 32px;
        color: #999;
        font-weight: bold;
        margin-top: 200px;
    }

    .match-container {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(0,0,0,0.8);
    }

    .match-container .avatar {
        width: 200px;
        height: 200;
        border-radius: 50%;
        border: 5px solid #FFF;
        margin: 30px 0;
    }

    .match-container strong {
        font-size: 32px;
        color: #FFF;
    }

    .match-container p {
        margin-top: 10px;
        font-size: 20px;
        line-height: 30px;
        max-width: 400px;
        color: rgba(255,255,255,0.8);
    }

    .match-container button {
        border: 0;
        background: none;
        font-weight: bold;
        color: rgba(255,255,255,0.8);
        font-size: 18px;
        margin-top: 30px;
        cursor: pointer;
    }
`;