import axios from 'axios';

import { setMessage } from './message';
                  
const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const API_KEY = 'AIzaSyAquwbUXdWeCUcpMgAZfg564QGKI9h_F8k';

export function userLogged(user){

    return {
        type: 'USER_LOGGED_IN',
        payload: user
    }
}

export function logout(){

    return {
        type: 'USER_LOGGED_OUT'
    }
}

export const createUser = (user) => {

    return (dispatch) => {

        axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
            email: user.email.toLowerCase(),
            password: user.password,
            returnSecureToken: true
        })
        .then( (response) => {

            if(response.data.localId){

                axios.put(`/users/${response.data.localId}.json`, {
                    name: user.name
                })
                .then( () => {

                    dispatch(login(user));

                }).catch( (error) => {
                    console.log('erro 4', error);
                    dispatch(setMessage({ title: 'Erro', text: error.message }));
                });
            }

        }).catch( (error) => {
            console.log('erro 3', error);
            dispatch(setMessage({ title: 'Erro', text: error.message }));
        });
    }
}

export const loadingUser = () => {
    return {
        type: 'LOADING_USER'
    }
}

export const userLoaded = () => {
    return {
        type: 'USER_LOADED'
    }
}

export const login = (user) => {

    return (dispatch) => {

        dispatch(loadingUser());

        axios.post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
            email: user.email.toLowerCase(),
            password: user.password,
            returnSecureToken: true
        })
        .then( (response) => {

            if(response.data.localId){

                user.token = response.data.idToken;

                axios.get(`/users/${response.data.localId}.json`)
                .then( (response) => {

                    delete user.password;
                    user.name = response.data.name;

                    dispatch(userLogged(user));
                    dispatch(userLoaded());

                }).catch( (error) => {
                    console.log('erro 6', error);
                    dispatch(setMessage({ title: 'Erro', text: error.message }));
                });
            }

        }).catch( (error) => {
            console.log('erro 5', error);
            dispatch(setMessage({ title: 'Erro', text: error.message }));
        });
    }
}