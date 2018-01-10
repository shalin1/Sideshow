import React from 'react';
import { Link } from 'react-router-dom';
import DashboardEventShow from './owned_event_item';

class UserDashboard extends React.Component {

  componentWillMount() {
    this.props.fetchEvents();
  }


  render () {
    let dashboard_items;
    if (this.props.pageType === "userEvents") {
      if (Object.keys(this.props.events).length === 0) {
        dashboard_items =
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
        dashboard_items = this.props.events.map( event => (
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
                <Link to="/myevents">My Events</Link>
              </div>
              <div className="user-dashboard-link">
                <Link to="/myevents">My Bookmarks</Link>
              </div>
            </nav>
            <article className="user-dashboard-items-container">
              {dashboard_items}
            </article>
          </section>
        </div>
      );
    }
  }
}
export default UserDashboard;
