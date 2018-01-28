import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';

class BrowseItem extends React.Component {
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
    let currentUser = this.props.currentUser;
    let eventId = this.props.event.id
    if (!currentUser) {
      return null
    } else if (currentUser.bookmarked_event_ids.includes(eventId)) {
      return e => this.props.removeBookmark(eventId)
    } else {
      return e => this.props.addBookmark({ event_id: eventId, user_id: currentUser.id});
    }
  }

  render() {
    const currentUser = this.props.currentUser;

    const {
      id,
      event_index_image_url,
      ticket_price,
      title,
      venue_name,
      event_start,
    } = this.props.event;
    const event_start_formatted = moment(event_start).format('ddd, MMM D h:mm A')

    const eventImage = {backgroundImage: 'url(' + event_index_image_url + ')'};

    const categories = this.props.event.categories.map( category => (
      <Link to='browse' key={category.id} className='browse-item-category'>#{category.name}  </Link>
    ))

    let bookmarkIcon;
    if (!currentUser) {
    } else if (currentUser.bookmarked_event_ids.indexOf(this.props.event.id) < 0) {
      bookmarkIcon = (<button className="browse-item-bookmark" onClick={this.changeBookmark()}>
        <i className="fa fa-bookmark-o fa-2x" aria-hidden="true" />
      </button>)
    } else {
      bookmarkIcon = (<button className="browse-item-bookmark" onClick={this.changeBookmark()}>
        <i className="fa fa-bookmark fa-2x bluefill" aria-hidden="true" />
      </button>)
    }

    return (
      <article className="browse-item-container">
        <Link to={`/events/${id}`}>
          <div className='browse-item-toprow'>
            <div
              className="browse-item-image"
              style={eventImage}
            >
            </div>
            <section className="browse-item-info">
              <div className="user-dashboard-ticket-text-date">
                {event_start_formatted}
              </div>
              <div className="user-dashboard-ticket-text-title">
                {title}
              </div>
              <div className="user-dashboard-ticket-text-date">
                {venue_name}
              </div>
            </section>
          </div>
        </Link>
        <section className='browse-item-bottomrow'>
          <div className='browse-item-grouping'>
            <div className="browse-item-price">
              ${Math.round(ticket_price)}
            </div>
            <div className='browse-item-categories'>
              {categories}
            </div>
          </div>
          {bookmarkIcon}
          </section>
      </article>
    );
  }
}

export default BrowseItem;
