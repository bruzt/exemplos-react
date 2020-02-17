import React, { useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

export default function Register(props) {

    useEffect(() => {

        getLocation();

    }, []);

    function getLocation() {

        navigator.geolocation.getCurrentPosition(
            position => {

                props.setLatitude(position.coords.latitude);
                props.setLongitude(position.coords.longitude);

            },
            async err => {
                console.log(err);

                try {
                    
                    const position = await axios.get('https://ipinfo.io/geo');
    
                    props.setLatitude(position.data.loc[0]);
                    props.setLongitude(position.data.loc[1]);

                } catch (error) {
                    console.error(error);
                }
            }, {
            timeout: 30000
        });
    }


    return (
        <Aside>
            <strong>Cadastrar</strong>
            <form onSubmit={(event) => props.handleSubmit(event)}>
                <div className='input-block'>
                    <label htmlFor="github_username">Usuário do GitHub</label>
                    <input 
                        type="text" 
                        name='github_username' 
                        id='github_username' 
                        required value={props.githubUsernameState}
                        onChange={(event) => props.setGithubUsername(event.target.value)}
                    />
                </div>
                <div className='input-block'>
                    <label htmlFor="techs">Tecnologias</label>
                    <input 
                        type="text" 
                        name='techs' 
                        id='techs' 
                        required 
                        value={props.techsState}
                        onChange={(event) => props.setTechs(event.target.value)}
                    />
                </div>
                <div className='input-group'>
                    <div className='input-block'>
                        <label htmlFor="latitude">Latitude</label>
                        <input 
                            type="text" 
                            name='latitude' 
                            id='latitude' 
                            required 
                            value={props.latitudeState} 
                            onChange={(event) => props.setLatitude(event.target.value)} 
                        />
                    </div>

                    <div className='input-block'>
                        <label htmlFor="longitude">Longitude</label>
                        <input 
                            type="text" 
                            name='longitude' 
                            id='longitude' 
                            required 
                            value={props.longitudeState} 
                            onChange={(event) => props.setLongitude(event.target.value)} 
                        />
                    </div>
                </div>

                <button type="submit">Salvar</button>
            </form>
        </Aside>
    );
}

const Aside = styled.aside`

    width: 320px;
    background: #FFF;
    box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.2);
    border-radius: 2px;
    padding: 30px 20px;

    strong {
        font-size: 20px;
        text-align: center;
        display: block;
        color: #333;
    }

    form {
        margin-top: 30px;

        .input-block {

            label {
                color: #ACACAC;
                font-weight: bold;
            }

            input {
                width: 100%;
                height: 32px;
                color: #666;
                border: 0;
                border-bottom: 1px solid #eee;
            }

            + .input-block { /* pega todos os input-block, exceto o primeiro */
                margin-top: 20px;
            }
        }

        .input-group {
            margin-top: 20px;
            display: grid;
            gap: 20px;
            grid-template-columns: 1fr 1fr;

            .input-block {
                margin-top: 0;
            }
        }

        button[type=submit] {
            width: 100%;
            border: 0;
            margin-top: 30px;
            background: #7d40e7;
            border-radius: 2px;
            padding: 15px 20px;
            font-size: 16px;
            font-weight: bold;
            color: #fff;
            cursor: pointer;
            transition: background 0.5s;

            :hover {
                background: #6931ca;
            }
        }
    }
`;
