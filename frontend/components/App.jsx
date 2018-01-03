import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, HashRouter } from 'react-router-dom';
import EmailFormContainer from './session/email_form_container';
import NewUserFormContainer from './user/new_user_form_container';
import SessionFormContainer from './session/session_form_container';
// import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className="nav-header">
      <div className="logo">Sideshow™</div>
      <GreetingContainer />
      <Route exact path="/signin" component={EmailFormContainer} />
      <Route path="/signin/signup" component={NewUserFormContainer} />
      <Route path="/signin/login" component={SessionFormContainer} />
    </header>
  </div>
);

export default App;
