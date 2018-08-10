import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import Input from './components/Input/Input';
import Summary from './components/Summary/Summary';
import Dashboard from './components/Dashboard/Dashboard';
import End from './components/End/End';
import Title from './components/Title/Title';
import TitleStatus from './components/TitleStatus/TitleStatus';
import Payment from './components/Payment/Payment';
import Stripe from './components/Stripe/Stripe';
import Review from './components/Review/Review';
import Comparables from './components/Comparables/Comparables';
import Maps from './components/Maps/Maps';
import Help from './components/Help/Help';
import Footer from './components/Footer/Footer';

export default (
    <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/input" component={Input} />
        <Route path="/summary/:id" component={Summary} />
        <Route path="/dashboard/:id" component={Dashboard} />
        <Route path="/comparables" component={Comparables} />
        <Route path="/end" component={End} />
        <Route path="/title-status" component={TitleStatus} />
        <Route path="/title" component={Title} />
        <Route path="/payment" component={Payment} />
        <Route path="/stripe" component={Stripe} />
        <Route path="/maps" component={Maps} />
        <Route path="/review" component={Review} />
        <Route path="/help" component={Help} />
        <Route path="/footer" component={Footer} />
        <Route path='/facebook' component={() => window.location = 'https://facebook.com'}/>
        <Route path='/twitter' component={() => window.location = 'https://twitter.com'}/>
        <Route path='/youtube' component={() => window.location = 'https://youtube.com'}/>



    </Switch>
)