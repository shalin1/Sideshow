import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';

class DashboardTicketShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
  }

  handleDelete() {
    this.props.deleteTicket(this.props.ticket);
    
  }

  render() {
    const event = this.props.event;
    const ticket = this.props.ticket;

    return (
      <article className="user-dashboard-ticket-container">
        <div className="user-dashboard-ticket-date">
          {event.event_start}
        </div>
        <div className="user-dashboard-ticket-title">
          {event.title}
        </div>
        <div>
          {event.price}
        </div>
        <div className="user-dashboard-ticket-actions">
          <button
            className="user-dashboard-button"
            onClick={this.handleDelete}
          >
            Refund<br/>Ticket
          </button>
        </div>
      </article>
    );
  }
}

export default withRouter(DashboardTicketShow);
