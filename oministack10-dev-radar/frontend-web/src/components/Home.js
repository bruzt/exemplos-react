import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import api from '../services/api';

import Register from './Register';
import DevListMain from './DevListMain';

export default function Home() {

    const [githubUsernameState, setGithubUsername] = useState('');
    const [techsState, setTechs] = useState('');
    const [latitudeState, setLatitude] = useState('');
    const [longitudeState, setLongitude] = useState('');
    const [devsState, setDevs] = useState([]);

    useEffect( () => {

        getDevs();

    }, []);

    async function handleAddDevs(event){

        event.preventDefault();

        try {
            
            const response = await api.post('/devs', {
                github_username: githubUsernameState,
                techs: techsState,
                latitude: latitudeState,
                longitude: longitudeState
            });

            setDevs([...devsState, response.data]);

            setGithubUsername('');
            setTechs('');

        } catch (error) {
            console.error(error);
        }
    }

    async function getDevs(){

        try {

            const response = await api.get('/devs');

            setDevs(response.data);
            
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Container>

            <Register 
                handleSubmit={handleAddDevs} 
                githubUsernameState={githubUsernameState}
                setGithubUsername={setGithubUsername}
                techsState={techsState}
                setTechs={setTechs}
                latitudeState={latitudeState}
                setLatitude={setLatitude}
                longitudeState={longitudeState}
                setLongitude={setLongitude}
            />

            <DevListMain 
                devsState={devsState}            
            />

        </Container>
    );
}

const Container = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 60px 30px;

    display: flex;
    flex-direction: row;
    align-items: flex-start;

    @media (max-width: 1050px){
        flex-direction: column;

        main {
            margin-left: 0;
            margin-top: 30px;
        }

        aside {
            width: 100%;
        }
    }
`;