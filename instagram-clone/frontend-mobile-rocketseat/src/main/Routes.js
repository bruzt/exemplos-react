import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import logo from '../assets/img/instagram.png';

import Feed from '../components/Feed';

const feedRoute = createStackNavigator({

    Feed
    
}, {
    defaultNavigationOptions: {
        headerTitle: <Image source={logo} />,
        headerStyle: {
            backgroundColor: '#f5f5f5'
        }
    },
    headerLayoutPreset: 'center'
    
});

export default createAppContainer(feedRoute);