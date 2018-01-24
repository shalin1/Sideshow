import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import Modal from 'react-modal';
import TicketPurchaseModal from '../ticketing/ticket_purchase_modal_container';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookmarked: false
    };
    this.handleTicketing = this.handleTicketing.bind(this);
    this.changeBookmark = this.changeBookmark.bind(this);
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


  componentWillMount() {
    this.props.fetchEvent(this.props.eventId);
    window.scrollTo(0, 0);
  }

  handleTicketing() {
    if (this.props.currentUser) {
      this.props.showTicketingModal();
    } else {
      this.props.history.push("/signin");
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li className='form-error-item' key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    if (this.props.event !== undefined) {

      const { title, ticket_price, event_start, event_end, description, venue_name,
      venue_address, event_show_image_url } = this.props.event;
      const eventImage = {
        backgroundImage: 'url(' + event_show_image_url + ')',
      };
      const ticketModal = (this.props.ticketingModalActive) ? <TicketPurchaseModal event={this.props.event}/> : null;

      const formattedPrice = Number(this.props.event.ticket_price).toFixed(2);
      const momentStart = moment(event_start).parseZone();
      const momentEnd = moment(event_end).parseZone();
      const startDateFull = momentStart.format("ddd, MMMM M, YYYY");
      const timeStart = momentStart.format("LT");
      const timeEnd = momentEnd.format("LT");
      const startMonth = momentStart.format("MMM");
      const startDay = momentStart.format("D");
      let currentUser = this.props.currentUser;
      let bookmarkIcon;
      if (!currentUser) {
      } else if (currentUser.bookmarked_event_ids.indexOf(this.props.event.id) < 0) {
        bookmarkIcon = (<button className="event-show-bookmark" onClick={this.changeBookmark()}>
          <i className="fa fa-bookmark-o fa-2x" aria-hidden="true" />
        </button>)
      } else {
        bookmarkIcon = (<button className="event-show-bookmark" onClick={this.changeBookmark()}>
          <i className="fa fa-bookmark fa-2x bluefill" aria-hidden="true" />
        </button>)
      }

        return(
        <div className="event-show-container-marginfix">

          <div
            className="event-show-background"
            style={eventImage}
          >
          </div>
          <div className="event-show-background-boundary">
          </div>
          <article className="event-show-container">

            <header className="event-show-hero">
              <figure className="event-show-hero-image"
                style={eventImage}></figure>
              <figcaption className="event-show-hero-info-container">
                <div>
                  <span className="event-show-hero-date-sm">
                    {startMonth}
                  </span>
                  <br/>
                  <span className="event-show-hero-date-lg">
                    {startDay}
                  </span>
                  <br/>
                  <br/>
                  <span className="event-show-hero-title">
                    {title}
                  </span>
                </div>
                <div className="event-show-hero-price">
                  ${formattedPrice}
                </div>
              </figcaption>
            </header>

            <section className="event-show-CTA-container">
              <button className="event-show-CTA-bookmark" onClick={this.changeBookmark}>
                {bookmarkIcon}
              </button>
              <button className="event-show-CTA-button callback-fill"
                onClick={this.handleTicketing}
              >
                Register Now
              </button>
            </section>

            <section className="event-show-body-container">
              <article className="event-show-body-description">
                <h3 className="label-primary">Description</h3>
                <br/>
                {description}
              </article>
              <div className="event-show-body-aside">
                <aside className="event-show-body-aside-item">
                  <h3 className="label-primary">Date and Time</h3>
                  <br/>
                  {startDateFull}
                  <br/>
                  {timeStart} - {timeEnd}
                </aside>
                <br/>
                <aside className="event-show-body-aside-item">
                  <h3 className="label-primary">Location</h3>
                  <br/>
                  {venue_name}
                  <br/>
                  {venue_address}
                </aside>
              </div>
            </section>

          </article>

          {ticketModal}
        </div>
      );
    } else {
      return(
        <h1>loading....</h1>
      );
    }
  }
}



export default EventShow;
