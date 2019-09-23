import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';

import _01 from '../components/public/01';
import _02 from '../components/public/02';
import _03 from '../components/public/03';
import _04 from '../components/public/04';
import _05 from '../components/public/05';
import _06 from '../components/public/06';

export default (props) => {

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/' component={_06} />

                <Redirect from='*' to='/' />

            </Switch>
        </BrowserRouter>
    );
}