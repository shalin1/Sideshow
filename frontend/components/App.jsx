import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import SignInFormContainer from './session/signin_form_container';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <NavBarContainer />
    <AuthRoute exact path="/signin" component={SignInFormContainer} />
    <AuthRoute path="/signin/signup" component={SessionFormContainer} />
    <AuthRoute path="/signin/login" component={SessionFormContainer} />
  </div>
);

export default App;
