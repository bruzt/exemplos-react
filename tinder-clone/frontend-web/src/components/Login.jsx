import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import api from '../services/api';

import logo from '../assets/img/logo.svg'

export default function Login(props) {

    useEffect( () => {

        document.title = 'Login tinder-clone';
    }); 
    

    const [username, setUsername] = useState('');


    async function handleSubmit(event){

        event.preventDefault();

        try {

            const response = await api.post('/devs', { username });

            const id = response.data._id;
           
            props.history.push(`/home/${id}`);

        } catch (error) {
            console.log('error', error);
        }
    }


    return (
        <Container>

            <form onSubmit={handleSubmit}>
                <img src={logo} alt='' />  
                <input 
                    placeholder='Digite seu usuário no Github'
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                />
                <button type='submit'>Enviar</button>
            </form>


        </Container>
    );
}


const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 100%;
        max-width: 300px;
        display: flex;
        flex-direction: column;

        input {
            margin-top: 20px;
            border: 1px solid #ddd;
            border-radius: 4px;
            height: 48px;
            padding: 0 20px;
            font-size: 16px;
            color: #666;
        }

        input::placeholder {
            color: #999;
        }

        button {
            margin-top: 10px;
            border: 0;
            border-radius: 4px;
            height: 48px;
            font-size: 16px;
            background: #df4723;
            font-weight: bold;
            color: #FFF;
            cursor: pointer;
        }
    }
`;
