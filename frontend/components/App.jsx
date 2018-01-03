import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, HashRouter } from 'react-router-dom';
import SignInFormContainer from './session/signin_form_container';
import SessionFormContainer from './session/session_form_container';
import AuthRoute from '../util/route_util.js';

const App = () => (
  <div>
    <header className="header">
      <div className="header-logo">
        <i className="fa fa-bullhorn fa-lg" aria-hidden="true" />
        <p className="header-logo-text">Sideshow</p>
      </div>
      <GreetingContainer />
    </header>

    <Route exact path="/signin" component={SignInFormContainer} />
    <Route path="/signin/signup" component={SessionFormContainer} />
    <Route path="/signin/login" component={SessionFormContainer} />
  </div>
);

export default App;
