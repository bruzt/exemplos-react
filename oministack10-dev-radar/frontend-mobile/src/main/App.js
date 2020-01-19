import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { SplashScreen } from 'expo';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './Routes';

YellowBox.ignoreWarnings([
    'Unrecognized WebSocket connection'
]);

export default function App() {

    SplashScreen.preventAutoHide();

    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {

        getFonts();

    }, []);


    async function getFonts() {

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
        <>

            {(fontsLoaded) && (

                <>

                    <StatusBar barStyle='light-content' backgroundColor='#7d40e7' />

                    <Routes />

                </>

            )}

        </>
    );
}