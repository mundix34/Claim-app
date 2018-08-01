import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Input from './components/Input/Input';
export default (
    <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/registration" component={ Registration } />
        <Route path="/input" component={ Input } />

    </Switch>
)