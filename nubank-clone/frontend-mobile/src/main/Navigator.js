import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Home from '../components/Home';

const homeRoute = createSwitchNavigator({

    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },
    
}, {
    initialRouteName: 'Home'
});

export default createAppContainer(homeRoute);