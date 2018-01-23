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
    const orderValue = Math.round(ticket.ticket_price * ticket.ticket_quantity, 2);
    const pluralizedTickets = ticket.ticket_quantity > 1 ? "tickets" : "ticket";

    return (
      <article className="user-dashboard-ticket-row">
        <div className="user-dashboard-ticket-container">
          <Link to={`/events/${event.id}`}>
            <section
              className="user-dashboard-ticket-image"
              style={eventImage}
            />

          </Link>
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
              You spent ${orderValue} for {ticket.ticket_quantity} {pluralizedTickets} on {ticketCreateDate}
            </div>
            <div className="user-dashboard-ownevents-item-actions">
              <span>Order #{ticket.code}</span>
              <Link to={`/events/${event.id}`}>
                <i className="fa fa-eye" aria-hidden="true"> </i>
                View Event
              </Link>
              <button onClick={this.handleDelete}><i className="fa fa-times" aria-hidden="true"></i> Cancel Order</button>

            </div>
          </section>
        </div>
      </article>
    );
  }
}

export default withRouter(DashboardTicketShow);
