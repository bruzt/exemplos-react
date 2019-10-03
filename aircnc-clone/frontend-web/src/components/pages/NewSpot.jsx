import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

import api from '../../services/api';

import cameraImage from '../../assets/img/camera.svg';

export default function(props) {

    document.title = 'Novo Spot';

    const [stateCompany, setCompany] = useState('');
    const [stateTechs, setTechs] = useState('');
    const [statePrice, setPrice] = useState('');
    const [stateThumbnail, setThumbnail] = useState(null);

    const preview = useMemo(() => {

        return (stateThumbnail) ? URL.createObjectURL(stateThumbnail) : null;

    }, [stateThumbnail]);
    

    async function handleSubmit(event){

        event.preventDefault();

        const data = new FormData();

        data.append('thumbnail', stateThumbnail);
        data.append('company', stateCompany);
        data.append('techs', stateTechs.toLowerCase());
        data.append('price', statePrice);

        await api.post('/spots', data, {
            headers: {
                user_id: localStorage.getItem('user')
            } 
        });

        props.history.push('/dashboard');
    }

    
    return (
        <form onSubmit={handleSubmit}>

            <ThumbnailLabel 
                style={{ backgroundImage: `url(${preview})` }}
                className={(stateThumbnail) ? 'has-thumbnail' : ''}
            >
                <input 
                    type="file" 
                    onChange={(event) => setThumbnail(event.target.files[0])}
                />
                <img src={cameraImage} alt='camera' />
            </ThumbnailLabel>

            <label htmlFor="company">EMPRESA *</label>
            <input
                id='company'
                placeholder='Sua empresa incrivel'
                value={stateCompany}
                onChange={(event) => setCompany(event.target.value)}
            />

            <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por virgula)</span></label>
            <input
                id='techs'
                placeholder='Quais tecnologias usam?'
                value={stateTechs}
                onChange={(event) => setTechs(event.target.value)}
            />

            <label htmlFor="price">VALOR DA DIÁRIA * <span>(em branco para gratuito)</span></label>
            <input
                id='price'
                placeholder='Valor cobrado por dia'
                value={statePrice}
                onChange={(event) => setPrice(event.target.value)}
            />

            <button type='submit' className='btn'>Cadastrar</button>
        </form>
    );
}

const ThumbnailLabel = styled.label`
    margin-bottom: 20px;
    border: 1px dashed #ddd;
    background-size: cover;
    cursor: pointer;
    height: 160px;

    display: flex;
    justify-content: center;
    align-items: center;

    input {
        display: none;
    }
`;