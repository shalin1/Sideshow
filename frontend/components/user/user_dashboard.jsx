import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DashboardEventShow from './owned_event_item';

class UserDashboard extends React.Component {

  componentWillMount() {
    this.props.fetchEvents();
  }

  render () {
    let dashboardContent;
    if (this.props.pageType === "userEvents") {
      if (Object.keys(this.props.events).length === 0) {
        dashboardContent =
        <div className="event-render-error">
          <h1>
            Nothing to see here right now
          </h1>
          <p>
            Maybe you'd like to
            <Link to="/create">
              Make an event?
            </Link>;
          </p>
        </div>;
      } else {
        dashboardContent = this.props.events.map( event => (
          <DashboardEventShow
            event={event}
            key={event.id}
            deleteEvent={this.props.deleteEvent}
          />
        ));
      }
    }

    if (!this.props.currentUser) {
      return (
        <div className="loading">
          <span>loading....</span>
          <i class="fa fa-hourglass fa-spin fa-3x" aria-hidden="true" />);
        </div>
      );
    } else {
      return (
        <div className="user-dashboard-container">
          <div className="user-dashboard-header">
            Welcome to your dashboard, {this.props.currentUser.first_name}!
          </div>
          <section className="user-dashboard-content">
            <nav className="user-dashboard-links">
              <div className="user-dashboard-link">
                <NavLink activeClassName="user-dashboard-link-selected"to="/myevents">
                  My Events
                </NavLink>
              </div>
              <div className="user-dashboard-link">
                <NavLink activeClassName="user-dashboard-link-selected"to="/bookmarks">
                  My Bookmarks
                </NavLink>
              </div>
              <div className="user-dashboard-link">
                <NavLink activeClassName="user-dashboard-link-selected"to="/mytickets">
                  My Bookmarks
                </NavLink>
              </div>
            </nav>
            <article className="user-dashboard-items-container">
              {dashboardContent}
            </article>
          </section>
        </div>
      );
    }
  }
}
export default UserDashboard;
