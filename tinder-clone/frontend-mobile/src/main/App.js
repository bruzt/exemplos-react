import React from 'react';
import { YellowBox } from 'react-native';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket',
    'borderStyle'
]);

import storeConfig from '../redux/store.config';

import Routes from './Routes';
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

                    <Routes />
                    
                </Provider>

            );
        } else {
            return false;
        }
    }
}
