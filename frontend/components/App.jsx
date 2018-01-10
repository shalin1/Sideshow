import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import SignInFormContainer from './session/signin_form_container';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './nav/navbar_container';
import FooterContainer from './nav/footer';
import EventIndex from './event/event_index_container';
import EventForm from './event/event_form_container';
import EventShow from './event/event_show_container';
import UserDashboardEvents from './user/user_dashboard_events_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';

const App = () => (
  <div>
    <NavBarContainer />

    <Route exact path="/" component={EventIndex} />
    <AuthRoute exact path="/signin" component={SessionFormContainer} />
    <AuthRoute exact path="/signin/signup" component={SessionFormContainer} />
    <AuthRoute exact path="/signin/login" component={SessionFormContainer} />
    <ProtectedRoute exact path="/create" component={EventForm} />
    <ProtectedRoute exact path="/events/:id/edit" component={EventForm} />
    <ProtectedRoute exact path="/myevents" component={UserDashboardEvents} />
    <Route exact path="/events/:id" component={EventShow} />
    <FooterContainer />
  </div>
);

export default App;
