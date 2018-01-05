import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import SignInFormContainer from './session/signin_form_container';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';
import EventIndex from './event/event_index_container';
import {AuthRoute} from '../util/route_util';

const App = () => (
  <div>
    <NavBarContainer />
    <Route exact path="/" component={EventIndex} />
    <AuthRoute exact path="/signin" component={SessionFormContainer} />
    <AuthRoute path="/signin/signup" component={SessionFormContainer} />
    <AuthRoute path="/signin/login" component={SessionFormContainer} />
  </div>
);

export default App;
