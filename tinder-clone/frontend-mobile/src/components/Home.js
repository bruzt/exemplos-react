import React, { useState, useEffect } from 'react';
import { AsyncStorage } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import styled from 'styled-components/native';
import io from 'socket.io-client';

import api from '../services/api';

import { setMessage } from '../redux/actions/messageActions';

import logo from '../assets/img/logo.png';
import like from '../assets/img/like.png';
import dislike from '../assets/img/dislike.png';
import itsAMatch from '../assets/img/itsamatch.png';

function Home(props){

    const [devList, setDevList] = useState([]);

    const [matchDev, setMatchDev] = useState(null);
    
    useEffect( () => {

        async function loadUsers(){

            try {

                const response = await api.get('/devs', {
                    headers: {
                        user: props.navigation.getParam('user')
                   }
                });
                
                setDevList(response.data);

            } catch (error) {
                console.log('Error', error);
            }
        }

        loadUsers();

    }, [props.navigation.getParam('user')]);


    useEffect( () => {

        const socket = io('http://192.168.1.119:3001', {
            query: { user: props.navigation.getParam('user') }
        });

        socket.on('match', (dev) => {
            
            setMatchDev(dev);
        });

    }, [props.navigation.getParam('user')]);


    async function onLike(){

        const [user, ...rest] = devList;

        try {

            await api.post(`/devs/${user._id}/likes`, null, {
                headers: {
                    user: props.navigation.getParam('user')
                }
            });

            setDevList(rest);
            
        } catch (error) {
            console.log('error', error);
        }
    }


    async function onDislike(){

        const [user, ...rest] = devList;
        
        try {

            await api.post(`/devs/${user._id}/dislikes`, null, {
                headers: {
                    user: props.navigation.getParam('user')
                }
            });

            setDevList(rest);
            
        } catch (error) {
            console.log('error', error);
        }
    }


    async function onLogoff(){
        
        try {
            
            await AsyncStorage.removeItem('user');
    
            props.navigation.navigate('Login');

        } catch (error) {
            console.log('error', error);
        }
    }


    function renderCards(){

        return devList.map( (dev, index) => {
            return (
                <Cards key={index} zIndex={devList.length - index}>
                    <Avatar source={{ uri: dev.avatar }} />
                    <Footer>
                        <Name>{dev.name}</Name>
                        <Bio numberOfLines={3}>{dev.bio}</Bio>
                    </Footer>
                </Cards>
            );
        });
    }

    
    return (
        <Container>
            
            <Logoff onPress={onLogoff}>
                <Logo source={logo} /> 
            </Logoff>

            <CardsContainer>

                {(devList.length > 0) ? (

                    renderCards()

                ) : (
                    <Empty>Acabou :(</Empty>
                )}

            </CardsContainer>

            {(devList.length > 0 && ! matchDev) && (
                <ButtonsContainer>
                    <Button onPress={onLike}>
                        <Like source={like} />
                    </Button>
                    <Button onPress={onDislike}>
                        <Dislike source={dislike} />
                    </Button>
                </ButtonsContainer>
            )}

            {(matchDev) && (
                <MatchContainer className="match-container">
                    <ItsAMatchImg source={itsAMatch} />
                    <MatchAvatar source={{ uri: matchDev.avatar }} />
                    <MatchName>{matchDev.name}</MatchName>
                    <MatchBio>{matchDev.bio}</MatchBio>

                    <MatchButton onPress={() => setMatchDev(null)}>
                        <CloseMatch>Fechar</CloseMatch>
                    </MatchButton>
                </MatchContainer>
            )}

        </Container>
    );
}


const Container = styled.View`
    flex: 1;
    margin-top: 25px;
    align-items: center;
    justify-content: space-between;
    background: #f5f5f5;
`;

const Logoff = styled.TouchableOpacity`

`;

const Logo = styled.Image`
    margin-top: 30px;
`;

const CardsContainer = styled.View`
    flex: 1;
    align-self: stretch;
    justify-content: center;
    max-height: 500;
`;

const Cards = styled.View`
    border: 1px solid #ddd;
    border-radius: 8px;
    margin: 30px;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: ${(props) => props.zIndex};
`;

const Avatar = styled.Image`
    flex: 1;
    height: 300;
`;

const Footer = styled.View`
    background: #fff;
    padding: 20px 15px 20px 15px;
`;

const Name = styled.Text`
    font-size: 16;
    font-weight: bold;
    color: #333;
`;

const Bio = styled.Text`
    font-size: 14;
    color: #999;
    margin-top: 5px;
    line-height: 18px;
`;

const ButtonsContainer = styled.View`
    flex-direction: row;
    margin-bottom: 30px;
`;

const Button = styled.TouchableOpacity`
    width: 50px;
    height: 50px;
    border-radius: 25px;
    background: #fff;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
    /* box-shadow */
    elevation: 2;
    shadow-color: #000;
    shadow-opacity: 0.05;
    shadow-radius: 2;
    shadow-offset: 0 2px;
`;

const Like = styled.Image`

`;

const Dislike = styled.Image`
    
`;

const Empty = styled.Text`
    color: #999;
    align-self: center;
    font-size: 24;
    font-weight: bold;
`;

const MatchContainer = styled.View`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 9999;
    background: rgba(0,0,0,0.8);
    justify-content: center;
    align-items: center;
`;

const ItsAMatchImg = styled.Image`
    height: 60px;
    resize-mode: contain;
`;

const MatchAvatar = styled.Image`
    width: 160px;
    height: 160px;
    border: 5px solid #FFF;
    border-radius: 80px;
    margin: 30px 0;
`;

const MatchName = styled.Text`
    font-size: 26;
    font-weight: bold;
    color: #FFF;
`;

const MatchBio = styled.Text`
    margin-top: 10px;
    font-size: 16;
    color: rgba(255,255,255,0.8);
    line-height: 24px;
    text-align: center;
    padding: 0 30px;
`;

const MatchButton = styled.TouchableOpacity`

`;

const CloseMatch = styled.Text`
    font-size: 16;
    color: rgba(255,255,255,0.8);
    text-align: center;
    margin-top: 30px;
    font-weight: bold;    
`;

////////////////////////////

const mapDispatchToProps = (dispatch) => bindActionCreators({ setMessage }, dispatch);

export default connect(null, mapDispatchToProps)(Home);