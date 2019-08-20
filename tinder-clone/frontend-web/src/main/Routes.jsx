import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';

import Login from '../components/Login';
import Home from '../components/Home';

export default (props) => {

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/' component={Login} />

                <Route path='/home/:id' component={Home} />

                <Redirect from='*' to='/' />

            </Switch>
        </BrowserRouter>
    );
}