import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import SignInFormContainer from './session/signin_form_container';
import SessionFormContainer from './session/session_form_container';
import NavBarContainer from './nav/navbar_container';
import FooterContainer from './nav/footer';
import EventIndex from './event/event_index_container';
import EventForm from './event/event_form_container';
import EventShow from './event/event_show_container';
import BrowseIndex from './browse/browse_container';
import CategoryShow from './category/category_show_container';
import CategoryIndex from './category/category_index_container';
import UserDashboard from './user/user_dashboard_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';


const App = () => (
  <div className="meta-container">
    <NavBarContainer />
    <Route exact path="/" component={EventIndex} />
    <Route exact path="/browse" component={BrowseIndex} />
    <Route exact path="/browse/:name" component={BrowseIndex} />
    <Route exact path="/categories" component={CategoryIndex} />
    <AuthRoute exact path="/signin" component={SessionFormContainer} />

    <AuthRoute exact path="/signin/signup" component={SessionFormContainer} />
    <AuthRoute exact path="/signin/login" component={SessionFormContainer} />
    <ProtectedRoute exact path="/create" component={EventForm} />
    <ProtectedRoute exact path="/events/:id/edit" component={EventForm} />
    <ProtectedRoute exact path="/my_events" component={UserDashboard} />
    <ProtectedRoute exact path="/my_tickets" component={UserDashboard} />
    <ProtectedRoute exact path="/my_bookmarks" component={UserDashboard} />
    <Route exact path="/events/:id" component={EventShow} />

    <FooterContainer />
  </div>
);

export default App;
