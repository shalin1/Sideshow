import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DashboardEventShow from './owned_event_item';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchEvents();
  }

  render () {
    let dashboardContent;

    switch (this.props.pageType) {
      case userEvents:
        if (Object.keys(this.props.content).length === 0) {
          dashboardContent =
          <div className="user-dashboard-render-error">
            <h2>You haven't made any events!</h2>
            <p>Maybe you'd like to <Link to="/create"> make one now?</Link></p>
          </div>;
        } else {
          dashboardContent = this.props.content.map( event => (
            <DashboardEventShow
              event={event}
              key={event.id}
              deleteEvent={this.props.deleteEvent}
            />
          ));
        }
      case userTickets:
        if (Object.keys(this.props.content).length === 0) {
          dashboardContent =
          <div className="user-dashboard-render-error">
            <h2>You haven't bought any tickets!</h2>
            <p>Maybe you'd like to <Link to="/">buy some now?</Link></p>
          </div>
        } else {
          dashboardContent = this.props.content.map( ticket => (
            <DashboardTicketShow
              ticket={ticket}
              key={ticket.id}
              deleteTicket={this.props.deleteTicket}
            />
          ));
        }
      case userBookmarks:
      if (Object.keys(this.props.content).length === 0) {
        dashboardContent =
        <div className="user-dashboard-render-error">
          <h2>You haven't bought any tickets!</h2>
          <p>Maybe you'd like to <Link to="/">buy some now?</Link></p>
        </div>
      } else {
        dashboardContent = this.props.content.map( ticket => (
          <DashboardBookmarkShow
            ticket={ticket}
            key={ticket.id}
            deleteTicket={this.props.deleteTicket}
          />
        ));
      }
        break;
      default:
      dashboardContent = "SOMETHING IS WRONG"
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
            <article className="user-dashboard-content-container">
              {dashboardContent}
            </article>
          </section>
        </div>
      );
    }
  }
}
export default UserDashboard;
