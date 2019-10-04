import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { SplashScreen } from 'expo';
import { YellowBox } from 'react-native';

import Routes from './Routes';

export default function App(props){

    SplashScreen.preventAutoHide();

    YellowBox.ignoreWarnings([
        'Unrecognized WebSocket connection option(s)'
    ]);

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

                <Routes />
            )}

        </React.Fragment>
    );
}