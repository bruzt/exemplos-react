import React from 'react';
import { StatusBar } from 'react-native';

import Navigator from './Navigator';

export default function App() {
    return (
        <>
            <StatusBar barStyle='light-content' backgroundColor='#8B10AE' />
            <Navigator />
        </>
    );
}