import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from '../components/pages/Login';
import Dashboard from '../components/pages/Dashboard';
import NewSpot from '../components/pages/NewSpot';

export default (props) => {

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/' component={Login} />
                <Route path='/dashboard' component={Dashboard} />
                <Route path='/newspot' component={NewSpot} />

            </Switch>
        </BrowserRouter>
    );
}