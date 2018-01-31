import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';
import lodash from 'lodash'
import BookmarkButton from '../bookmark/bookmark_button';

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
    const currentUser = this.props.currentUser;

    const {
      event_index_image_url,
      ticket_price,
      title,
      event_start,
      venue_name,
      id
    } = this.props.event;
    const categories = this.props.event.categories.map( category => (
      <Link to={`browse/${_.lowerCase(category.name)}`} key={category.id}>#{category.name} </Link>
    ))
    const eventImage = {
      backgroundImage: 'url(' + event_index_image_url + ')',
    };
    const momentStart = moment(event_start);
    const eventStart = momentStart.format("ddd, MMM D h:mm A");

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
            {categories}
          </span>
          <BookmarkButton
            eventId = {id}
            currentUser = {currentUser}
            addBookmark = {this.props.addBookmark}
            removeBookmark = {this.props.removeBookmark}
          />
        </section>
      </article>
    );
  }
}

export default withRouter(EventIndexItem);
