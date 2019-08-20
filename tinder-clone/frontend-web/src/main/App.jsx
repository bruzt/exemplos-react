import React from 'react';
import { Provider } from 'react-redux';

import store from '../redux/store.config';

import '../dependencies/jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './global.css';

import Routes from './Routes';
import Toast from '../components/common/Toast';

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>
                
                <Toast />

                <Routes />

            </Provider>
        );
    }
}