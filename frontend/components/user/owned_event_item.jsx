import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';

class OwnedEventItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      title,
      event_start,
      tickets_available,
      tickets
    } = this.props.event;

    const eventStart = moment(event_start).format("ddd, MMM D h:mm A");

    return (
      <article
        className="user-dashboard-owned-event-item"
      >
        <section
          className="event-index-item-header"
          style={eventImage}
          onClick={this.handleClick}
        >
            <div className="event-index-item-price">
              ${Math.round(ticket_price)}</div>
        </section>

        <section
          className="event-index-item-body"
          onClick={this.handleClick}
        >
          <div>
            <div className="event-index-item-date">
              {eventStart}
            </div>
            <div className="event-index-item-title">
              {title}
            </div>
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

export default withRouter(OwnedEventItem);
