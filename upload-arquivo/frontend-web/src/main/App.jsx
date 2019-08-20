import React from 'react';
import { Provider } from 'react-redux';

import '../dependencies/jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import GlobalStyle from './globalStyle.js';

import store from '../redux/store.config';

import Routes from './Routes';
import Toast from '../components/common/Toast';

export default class App extends React.Component {

    render() {
        return (
            <Provider store={store}>

                <GlobalStyle />
                
                <Toast />

                <Routes />

            </Provider>
        );
    }
}