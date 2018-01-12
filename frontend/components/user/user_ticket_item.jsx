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
    const momentTicketBuy = moment(ticket.created_at);
    const ticketCreateDate = momentTicketBuy.format("MMMM Do, YYYY");
    const orderValue = ticket.ticket_price * ticket.ticket_quantity;
    const pluralizedTickets = ticket.ticket_quantity > 1 ? "tickets" : "ticket";

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
              You spent ${orderValue} for {ticket.ticket_quantity} {pluralizedTickets} on <br/>{ticketCreateDate}
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
