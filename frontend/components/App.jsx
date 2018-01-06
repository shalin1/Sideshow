import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import SignInFormContainer from './session/signin_form_container';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './nav/navbar_container';
import FooterContainer from './nav/footer';
import EventIndex from './event/event_index_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <NavBarContainer />
    <Route exact path="/" component={EventIndex} />
    <AuthRoute exact path="/signin" component={SessionFormContainer} />
    <AuthRoute path="/signin/signup" component={SessionFormContainer} />
    <AuthRoute path="/signin/login" component={SessionFormContainer} />
    <FooterContainer />
  </div>
);

export default App;
