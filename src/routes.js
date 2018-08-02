import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Input from './components/Input/Input';
import Summary from './components/Summary/Summary';
export default (
    <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/registration" component={ Registration } />
        <Route path="/input" component={ Input } />
        <Route path="/summary/:id" component={ Summary } />

    </Switch>
)