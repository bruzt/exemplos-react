import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from '../pages/Main';
import Profile from '../pages/Profile';

const stackRoute = createStackNavigator({

    Main: {
        screen: Main,
        navigationOptions: {
            title: 'Dev Radar'
        }
    },

    Profile: {
        screen: Profile,
        navigationOptions: {
            title: 'Perfil no GitHub'
        }
    }

}, {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
        headerBackTitleVisible: false,
        headerStyle: {
            backgroundColor: '#7d40e7'
        },
        headerTitleStyle: {
            color: '#fff',
        }
    }
});

export default createAppContainer(stackRoute);