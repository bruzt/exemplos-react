import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';

import Map from '../components/public/PrintClick';

export default (props) => {

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/' component={Map} />

                <Redirect from='*' to='/' />

            </Switch>
        </BrowserRouter>
    );
}