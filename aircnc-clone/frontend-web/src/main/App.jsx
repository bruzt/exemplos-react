import React from 'react';

import '../dependencies/jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import GlobalStyle from './GlobalStyle';

import Home from '../components/Home';

export default class App extends React.Component {

    render() {
        return (
            <>

                <GlobalStyle />

                <Home />

            </>
        );
    }
}