import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from '../Navigation';
import * as ROUTES from '../../constants/routes';
import LandingPage from '../Landing';
import HomePage from '../Home';
import SignInPage from '../SignIn';
import SignUpPage from '../SignUp';
import AccountPage from '../Account';
import AdminPage from '../Admin';
import PasswordForgetPage from '../PasswordForgot';


export default function index() {
    return (
       <Router>
        <Navigation />
        <Route exact path={ROUTES.LANDING} component={LandingPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.PASSWORD_FORGOT} component={PasswordForgetPage} />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.ACCOUNT} component={AccountPage} />
        <Route path={ROUTES.ADMIN} component={AdminPage} />
       </Router>
    )
}
