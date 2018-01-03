import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import SignInFormContainer from './session/signin_form_container';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './navbar/navbar_container';

const App = () => (
  <div>
    <NavBarContainer />
    <Route exact path="/signin" component={SignInFormContainer} />
    <Route path="/signin/signup" component={SessionFormContainer} />
    <Route path="/signin/login" component={SessionFormContainer} />
  </div>
);

export default App;
