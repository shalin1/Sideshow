import React from 'react';
import { Link } from 'react-router-dom';
import OwnedEventItem from './owned_event_item';

class UserDashboard extends React.Component {

  componentWillMount() {
    this.props.fetchEvents();
  }

  render () {
    let dashboard_items;
    if (pageType === "userEvents") {
      if (!this.props.events) {
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
        
        <OwnedEventItem
          event={event}
          key={event.id}
        />
      ));
    }
    }

    if (!this.props.user) {
      return ('loading');
    } else {
      return (
        <div className="user-dashboard-container">
          <div className="user-dashboard-header">
            Welcome to your dashboard
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
            <article className="user-dashboard-items">
              {dashboard_items}
            </article>

          </section>
        </div>
      );
    }
  }
}
export default UserDashboard;
