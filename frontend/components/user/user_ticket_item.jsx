import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';

class DashboardTicketShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteTicket(this.props.ticket);
  }

  render() {
    const event = this.props.event;
    const ticket = this.props.ticket;
    const eventImage = {
      backgroundImage: 'url(' + event.event_index_image_url + ')',
    };
    const momentStart = moment(event.event_start);
    const eventStart = momentStart.format("dddd, MMMM D h:mm A");
    return (
      <article className="user-dashboard-ticket-row">
        <div className="user-dashboard-ticket-container">
          <section
            className="user-dashboard-ticket-image"
            style={eventImage}
          >
          </section>
          <section className="user-dashboard-ticket-text-container">
            <div>
              <div className="user-dashboard-ticket-text-date">
                {eventStart}
              </div>
              <div className="user-dashboard-ticket-text-title">
                {event.title}
              </div>
            </div>
            <div className="user-dashboard-ticket-text-price">
              ${event.ticket_price}
            </div>
          </section>
          <section className="user-dashboard-ticket-action">
            <button
              className="user-dashboard-ticket-action-button"
              onClick={this.handleDelete}
            >
              Refund Ticket
            </button>
          </section>
        </div>
      </article>
    );
  }
}

export default withRouter(DashboardTicketShow);
