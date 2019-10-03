import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import { withNavigation } from 'react-navigation';

import api from '../services/api';

function SpotList(props) {

    const [spotsState, setSpots] = useState([]);

    useEffect( () => {

        loadSpots();

    }, []);

    async function loadSpots(){

        try {

            const response = await api.get('/spots', {
                params: {
                    tech: props.tech
                }
            });

            setSpots(response.data);
            
        } catch (error) {
            console.log(error);
        }
    }

    function handleNavigate(id){

        props.navigation.navigate('Book', { id });
    }

    return (
        <Container>

            <Title>Empresas que usam <TitleBold>{props.tech}</TitleBold></Title>

            <List 
                data={spotsState}
                keyExtractor={(spot) => spot._id}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <ListItem>
                        <Thumbnail source={{ uri: item.thumbnail_url }} />
                        <Company>{item.company}</Company>
                        <Price>{(item.price) ? `R$ ${item.price}/dia` : 'Gratuito'}</Price>
                        <Button onPress={() => handleNavigate(item._id)}>
                            <ButtonText>Solicitar Reserva</ButtonText>
                        </Button>
                    </ListItem>
                )}
            />

        </Container>
    );
}

const Container = styled.View`
    margin: 30px 0 0 0;
`;

const Title = styled.Text`
    font-size: 20px;
    color: #444;
    padding: 0 20px;
    margin: 0 0 15px 0;
`;

const TitleBold = styled.Text`
    font-weight: bold;
`;

const List = styled(FlatList)`
    padding: 0 20px;
`;

const ListItem = styled.View`
    margin: 0 15px 0 0;
`;

const Thumbnail = styled.Image`
    width: 200px;
    height: 120px;
    resize-mode: cover;
    border-radius: 2px; 
`;

const Company = styled.Text`
    font-size: 24px;
    font-weight: bold;
    color: #333;
    margin: 10px 0 0 0;
`;

const Price = styled.Text`
    font-size: 15px;
    color: #999;
    margin: 5px 0 0 0;
`;

const Button = styled.TouchableOpacity`
    height: 32px;
    background-color: #f05a5b;
    justify-content: center;
    align-items: center;
    border-radius: 2px;
    margin: 15px 0 0 0;
`;

const ButtonText = styled.Text`
    color: #FFF;
    font-weight: bold;
    font-size: 15px;
`;

/////////////////////////////////////////

export default withNavigation(SpotList);