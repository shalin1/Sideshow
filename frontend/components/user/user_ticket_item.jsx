import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';

class DashboardTicketShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchEvent(this.props.ticket.event_id);
  }

  handleDelete() {
    this.props.deleteTicket(this.props.ticket).then(
      () => window.location.reload()
    );
  }

  render() {

    const {
      id, event_id, ticket_holder_id
    } = this.props.ticket;

    const eventStart = moment(event_start).format("ddd, MMM D h:mm A");

    return (
      <article className="user-dashboard-ticket-container">
        <div className="user-dashboard-ticket-date">
          {eventStart}
        </div>
        <div className="user-dashboard-ticket-title">
          {title}
        </div>
        <div className="user-dashboard-ticket-actions">
          <Link to={`/events/${id}`}>
            View<br/>Event
          </Link>
          <Link to={`/events/${id}/edit`}>
            Edit<br/>Event
          </Link>
          <button
            className="user-dashboard-button"
            onClick={this.handleDelete}
          >
            Delete<br/>Event
          </button>
        </div>
      </article>
    );
  }
}

export default withRouter(DashboardTicketShow);
