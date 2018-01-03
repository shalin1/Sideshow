import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, HashRouter } from 'react-router-dom';
import SessionFormContainer from './session/session_form_container';
// import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className="nav-header">
      <div className="logo">Sideshow™</div>
      <div className="login">Sign In</div>
        <Route path="/login" component={SessionFormContainer} />
        <Route path="/signup" component={SessionFormContainer} />
      <GreetingContainer />
    </header>
  </div>
);

export default App;
