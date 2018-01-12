import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import DashboardEventShow from './user_event_item';
import DashboardTicketShow from './user_ticket_item';

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.pageIsLoading();
    this.props.fetchEvents().then(
      () => this.props.fetchTickets().then(
        () => this.props.pageFinishedLoading()
      )
    );
  }

  render () {
    if (this.props.loading) {
      return (
        <div className="loading">
          <span>loading....</span>
          <i className="fa fa-hourglass fa-spin fa-3x" aria-hidden="true" />);
        </div>
      );
    } else {
      let dashboardContent;
      switch (this.props.pageType) {
        case "userEvents":
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
          break;
        case "userTickets":
          if (Object.keys(this.props.content).length === 0) {
            dashboardContent =
            <div className="user-dashboard-render-error">
              <h2>You haven't bought any tickets!</h2>
              <p>Maybe you'd like to <Link to="/">buy some now?</Link></p>
            </div>;
          } else {
            dashboardContent = this.props.content.map( registration => (
              <DashboardTicketShow
                ticket={registration.ticket}
                key={registration.ticket.id}
                event={registration.event}
                deleteTicket={this.props.deleteTicket}
                fetchTickets={this.props.fetchTickets}
              />
            ));
          }
          break;
        case "userBookmarks":
          if (Object.keys(this.props.content).length === 0) {
            dashboardContent =
            <div className="user-dashboard-render-error">
              <h2>You haven't bought any tickets!</h2>
              <p>Maybe you'd like to <Link to="/">buy some now?</Link></p>
            </div>;
          } else {
            dashboardContent = this.props.content.map( ticket => (
              <DashboardTicketShow
                ticket={ticket}
                key={ticket.id}
                deleteTicket={this.props.deleteTicket}
              />
            ));
          }
          break;
        default:
          dashboardContent = "SOMETHING IS WRONG";
        }

      return (
        <div className="user-dashboard-container">
          <div className="user-dashboard-header flex-center">
            {this.props.currentUser.first_name} {this.props.currentUser.first_name}'s profile
          </div>
          <section className="user-dashboard-content">
            <nav className="user-dashboard-links">
              <section className="user-dashboard-links-container">
                <NavLink activeClassName="user-dashboard-link-selected"to="/my_events">
                  <div className="flex-center user-dashboard-link">
                    My Events
                  </div>
                </NavLink>
                <NavLink activeClassName="user-dashboard-link-selected"to="/my_tickets">
                  <div className="flex-center user-dashboard-link">
                    My Tickets
                  </div>
                </NavLink>
              </section>
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
