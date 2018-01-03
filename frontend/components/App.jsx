import React from 'react';
import GreetingContainer from './greeting/greeting_container';
import { Route, HashRouter } from 'react-router-dom';
import EmailFormContainer from './session/email_form_container';
// import { AuthRoute } from '../util/route_util';

const App = () => (
  <div>
    <header className="nav-header">
      <div className="logo">Sideshow™</div>
      <GreetingContainer />
      <Route path="/login" component={EmailFormContainer} />
    </header>
  </div>
);

export default App;
