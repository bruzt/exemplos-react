import React from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';

import storeConfig from '../redux/store.config';

import Navigator from './Navigator';
import AlertMessage from '../components/common/AlertMessage';

export default class App extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            fontsLoaded: false
        }

        this.getFonts();
    }

    async getFonts(){

        try {

            await Font.loadAsync({ 

                //'shelter': require('../assets/fonts/shelter.otf')
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