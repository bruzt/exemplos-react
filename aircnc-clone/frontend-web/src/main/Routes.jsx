import React from 'react';
import { BrowserRouter, Switch, Route, Redirect  } from 'react-router-dom';

import Home from '../components/public/Home';
import LoginPageOrAdminPage from '../components/admin/Login/LoginPageOrAdminPage';

export default (props) => {

    return (
        <BrowserRouter>
            <Switch>

                <Route exact path='/' component={Home} />
                <Route path='/admin' component={LoginPageOrAdminPage} />

                <Redirect from='*' to='/' />

            </Switch>
        </BrowserRouter>
    );
}