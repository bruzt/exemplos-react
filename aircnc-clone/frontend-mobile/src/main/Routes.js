import { createDrawerNavigator, createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../components/Home';
import StackScreen from '../components/StackScreen';

const mainRoute = createDrawerNavigator({

    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Home'
        }
    },

});

const stackRoute = createStackNavigator({

    Home: {
        screen: mainRoute,
        navigationOptions: {
            header: null
        }
    },

    StackScreen: {
        screen: StackScreen,
        navigationOptions: {
            title: 'Stack'
        }
    },

}, {
    initialRouteName: 'Home'
});



export default createAppContainer(stackRoute);