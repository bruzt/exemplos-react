import React from 'react';
import { Provider } from 'react-redux';

import '../dependencies/jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';

import store from '../redux/store.config';

import Toast from '../components/common/Toast';
import Routes from './Routes';

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