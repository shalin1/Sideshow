import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const eventId = this.props.event.id;
    this.props.history.push(`/events/${eventId}`);
  }

  render() {
    const {
      index_image_url,
      ticket_price,
      title,
      event_start,
      venue_name
    } = this.props.event;

    return (
      <div
        className="event-index-item"
        onClick={this.handleClick}
      >
        <section className="event-index-item-header">
          <div className="event-index-item-image">
            <img src={index_image_url}/>
          </div>
          <span className="event-index-item-label">
            {ticket_price}
          </span>
        </section>

        <section className="event-index-item-body">
          <span className="event-index-item-date">
            {event_start}
          </span>
          <span className="event-index-item-title">
            {title}
          </span>
          <span className="event-index-item-venue">
            {venue_name}
          </span>
        </section>

        <section className="event-index-item-footer">
          <div className="event-index-item-categories">
            #Underground //categories
          </div>
        </section>
      </div>
    );
  }
}

export default withRouter(EventIndexItem);
