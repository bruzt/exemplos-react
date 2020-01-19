import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';

import Home from '../components/Home';

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/' component={Home} />
                
                <Redirect from='*' to='/' />

            </Switch>
        </BrowserRouter>
    );
}