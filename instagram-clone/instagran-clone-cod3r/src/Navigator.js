import React from 'react';
import { createBottomTabNavigator , createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import Splash from './components/screens/Splash';
import Feed from './components/screens/Feed';
import AddPhoto from './components/screens/AddPhoto';
import Profile from './components/screens/Profile';
import Login from './components/screens/Login';
import Register from './components/screens/Register';

const authRoute = createStackNavigator({

    Login: {
        screen: Login,
        navigationOptions: {
            title: 'Login'
        }
    },

    Register: {
        screen: Register,
        navigationOptions: {
            title: 'Register'
        }
    }
}, {
    initialRouteName: 'Login'
});

const loginOrProfileRoute = createSwitchNavigator({

    Profile: Profile,
    Auth: authRoute

}, {

    initialRouteName: 'Auth'
});

const menuRoutes = {
    Feed: {
        name: 'Feed',
        screen: Feed,
        navigationOptions: {
            title: 'Feed',
            tabBarIcon: ({ tintColor }) => <Icon name='home' size={30} color={tintColor} />
        }
    },

    Add: {
        name: 'AddPhoto',
        screen: AddPhoto,
        navigationOptions: {
            title: 'Add Picture',
            tabBarIcon: ({ tintColor }) => <Icon name='camera' size={30} color={tintColor} />
        }
    },

    Profile: {
        name: 'Profile',
        screen: loginOrProfileRoute,
        navigationOptions: {
            title: 'Profile',
            tabBarIcon: ({ tintColor }) => <Icon name='user' size={30} color={tintColor} />
        }
    }
}

const menuConfig = {
    initialRouteName: 'Feed',
    tabBarOptions: {
        showLabel: false
    }
}

const menuNavigator = createBottomTabNavigator(menuRoutes, menuConfig);

const splashRouter = createSwitchNavigator({

    Splash: Splash,
    App: menuNavigator
}, {
    initialRouteName: 'Splash'
});

export default createAppContainer(splashRouter);
