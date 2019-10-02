import React from 'react';

import '../dependencies/jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import GlobalStyle from './GlobalStyle';

import Routes from './Routes';

export default class App extends React.Component {

    render() {
        return (
            <>

                <GlobalStyle />

                <Routes />

            </>
        );
    }
}