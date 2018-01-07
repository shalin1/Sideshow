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
      event_index_image_url,
      ticket_price,
      title,
      event_start,
      venue_name
    } = this.props.event;
    const eventImage = {
      backgroundImage: 'url(' + event_index_image_url + ')',
    };
    return (
      <article
        className="event-index-item"
      >
        <section
          className="event-index-item-header"
          style={eventImage}
          onClick={this.handleClick}
        >
            <div className="event-index-item-price">${ticket_price}</div>
        </section>

        <section
          className="event-index-item-body"
          onClick={this.handleClick}
        >
          <span className="event-index-item-date">
            {event_start}
          </span>
          <div className="event-index-item-title">
            {title}
          </div>
          <div className="event-index-item-venue">
            {venue_name}
          </div>
        </section>

        <section className="event-index-item-footer">
          <span className="event-index-item-categories">
            #Underground #Party
          </span>
          <div className="event-index-item-bookmark">
            <i className="fa fa-bookmark-o fa-2x" aria-hidden="true" />
          </div>
        </section>
      </article>
    );
  }
}

export default withRouter(EventIndexItem);
