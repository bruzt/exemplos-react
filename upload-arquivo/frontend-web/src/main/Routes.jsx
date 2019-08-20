import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';

import Home from '../components/public/Home';

export default (props) => {

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/' component={Home} />

                <Redirect from='*' to='/' />

            </Switch>
        </BrowserRouter>
    );
}