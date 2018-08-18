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
import StripeDone from './components/Stripe/StripeDone';
import Profile from './components/Profile/Profile';
import Privacy from './components/Privacy/Privacy';

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
        <Route path="/stripedone" component={StripeDone} />
        <Route path="/maps" component={Maps} />
        <Route path="/review" component={Review} />
        <Route path="/help" component={Help} />
        <Route path="/profile" component={Profile} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/footer" component={Footer} />
        <Route path='/facebook' component={() => window.location = 'https://facebook.com'} />
        <Route path='/twitter' component={() => window.location = 'https://twitter.com'} />
        <Route path='/youtube' component={() => window.location = 'https://youtube.com'} />
        <Route path='/stripesite' component={() => window.location = 'https://connect.stripe.com/oauth/authorize?'} />
        <Route path="/phone" component={() => (
            <p> Our Phone Number is 1-800-889-0045</p>
        )} />
        <Route path="/faq" component={() => (
            <div>
                <h1> Frequently Asked Questions</h1>
                <p> The primary purpose of a website disclaimer is to limit or attempt to limit the liabilities that a website owner or publisher may suffer arising out of the website. Examples of the kinds of liability that we publishers must contend with include libel/defamation, copyright infringement and breach of privacy. Most legal systems strictly control the effects of limitations and exclusions of liability. For this reason you should take local legal advice if you believe you may have to rely upon the limits of liability in our free website disclaimer document.

                    The following statement was obtained from contractology.com</p>
                <p>
Is there a toll-free number for a rate quote?
You can contact us at 1-800-889-0045.
For calls during business hours, your call will be directed to an agent near you. For calls after-hours and on weekends, your call will be directed to a Customer Care Center representative. Spanish-speaking representatives are available.

Is my account number the same as my policy number?
No. A policy number is an alpha-numeric code unique to each individual policy at State Farm. An account number is a 10-digit number associated with a State Farm Payment Plan (SFPP).
If you have questions about your policy or payment plan, please contact your agent.</p>
            </div>
        )} />



    </Switch>
)