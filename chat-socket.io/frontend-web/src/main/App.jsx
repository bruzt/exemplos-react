import React from 'react';

import '../dependencies/jquery';

import GlobalStyle from './GlobalStyle';

import Routes from './Routes';

export default class App extends React.Component {

    render() {
        return (
            <React.Fragment>

                <GlobalStyle />

                <Routes />

            </React.Fragment>
        );
    }
}