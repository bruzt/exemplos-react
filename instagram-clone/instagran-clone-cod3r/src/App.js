import React from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import axios from 'axios';

import storeConfig from './redux/store.config';

import Navigator from './Navigator';
import AlertMessage from './components/AlertMessage';

export default class App extends React.Component {

    constructor(props){
        super(props);

        axios.defaults.baseURL = 'http://192.168.1.119:3001';

        this.state = {
            fontsLoaded: false
        }

        this.getFonts();
    }

    async getFonts(){

        try {

            await Font.loadAsync({ 

                'shelter': require('../assets/fonts/shelter.otf')
            });

            this.setState({ fontsLoaded: true });
            
        } catch (error) {
            console.error(error);
        }
    }

    render() {

        if(this.state.fontsLoaded){
            return (

                <Provider store={storeConfig}>
                    <AlertMessage />
                    <Navigator />
                </Provider>

            );
        } else {
            return false;
        }
    }
}