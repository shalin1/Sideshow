import React from 'react';
import { withRouter } from 'react-router-dom';

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
    const { index_image_url, ticket_price, title, event_start, venue_name } = this.props.event;
    return (
      <article
        className="event-index"
        onClick={this.handleClick}
      >
        <section className="event-index-item-image">
          <div className="event-index-image">
            <img src={index_image_url}/>
          </div>
          <span className="event-index-item-price">
            {ticket_price}
          </span>
        </section>

        <section className="event-index-item-info">
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
      </article>
    );
  }
}

export default withRouter(EventIndexItem);
