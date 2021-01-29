import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing';
import Menu1 from './pages/Menu1';

export default function Router(){

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/' component={Landing} />
                <Route exact path='/menu1' component={Menu1} />

            </Switch>
        </BrowserRouter>
    );
}
