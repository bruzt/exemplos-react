import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import * as Font from 'expo-font';
import { SplashScreen } from 'expo';

import store from '../redux/store';

import Routes from './Routes';
import AlertMessage from '../components/common/AlertMessage';

export default function App(props){

    SplashScreen.preventAutoHide();

    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect( () => {

        getFonts();
        
    }, []);


    async function getFonts(){

        try {
    
            await Font.loadAsync({ 
    
                //'shelter': require('../assets/fonts/shelter.otf')
            });
    
            setFontsLoaded(true);
            SplashScreen.hide();
            
        } catch (error) {
            console.error(error);
        }
    }
    

    return (
        <React.Fragment>

            {(fontsLoaded) && (

                <Provider store={store}>

                    <AlertMessage />

                    <Routes />

                </Provider>

            )}

        </React.Fragment>
    );
}