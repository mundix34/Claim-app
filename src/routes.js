import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
export default (
    <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/registration" component={ Registration } />

    </Switch>
)