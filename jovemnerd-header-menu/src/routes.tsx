 import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NerdCast from './pages/NerdCast';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/nerdcast' component={NerdCast} />
            </Switch>
        </BrowserRouter>
    );
}