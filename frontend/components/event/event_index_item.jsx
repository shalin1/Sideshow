import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';

class EventIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.changeBookmark = this.changeBookmark.bind(this);
  }

  handleClick() {
    const eventId = this.props.event.id;
    this.props.history.push(`/events/${eventId}`);
  }

  changeBookmark() {
    const currentUser = this.props.currentUser;

    if (!currentUser) {
      return null
    } else if (currentUser.bookmarked_event_ids.includes(this.props.event.id)) {

      return e => this.props.removeBookmark(this.props.event.id)
    } else {
      return e => this.props.addBookmark({ event_id: this.props.event.id, user_id: this.props.currentUser.id});
    }
  }

  render() {

    const currentUser = this.props.currentUser;

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
    const momentStart = moment(event_start);
    const eventStart = momentStart.format("ddd, MMM D h:mm A");

    let bookmarkIcon;
    if (!currentUser) {
    } else if (currentUser.bookmarked_event_ids.indexOf(this.props.event.id) < 0) {
      bookmarkIcon = (<button className="event-index-item-bookmark" onClick={this.changeBookmark()}>
        <i className="fa fa-bookmark-o fa-2x" aria-hidden="true" />
      </button>)
    } else {
      bookmarkIcon = (<button className="event-index-item-bookmark" onClick={this.changeBookmark()}>
        <i className="fa fa-bookmark fa-2x bluefill" aria-hidden="true" />
      </button>)
    }


    return (
      <article
        className="event-index-item"
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
          {bookmarkIcon}
        </section>
      </article>
    );
  }
}

export default withRouter(EventIndexItem);
