import { createSwitchNavigator, createAppContainer } from 'react-navigation';

import Login from '../components/Login';
import Home from '../components/Home';

export default createAppContainer(
    createSwitchNavigator({

        Login: {
            screen: Login,
            navigationOptions: {
                title: 'Login'
            }
        },

        Home: {
            screen: Home,
            navigationOptions: {
                title: 'Home'
            }
        }
        
    }, {
        initialRouteName: 'Login'
    })
);