import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import {  } from 'react-router';

import Index from '../components/Index';

class Routes extends React.Component {

    render(){
        return (
            <BrowserRouter>
                <Switch>

                    <Route exact path='/' component={Index} />

                    <Redirect from='*' to='/' />
                    
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Routes;