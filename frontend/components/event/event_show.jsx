import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchEvent(this.props.eventId);
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

  handleClick() {
    console.log("Regitration button clicked");
  }

  render () {
    if (this.props.event !== undefined) {
      const { title, ticket_price, event_start, event_end, description, venue_name,
      venue_address, event_show_image_url } = this.props.event;
      const eventImage = {
        backgroundImage: 'url(' + event_show_image_url + ')',
      };

      return(
        <div
          className="event-show-background"
          style={eventImage}
        >
          <article className="event-show-container">

            <header className="event-show-hero">
              <figure className="event-show-hero-image" style={eventImage}></figure>
              <figcaption className="event-show-hero-info-container">
                <div className="event-show-hero-date">
                  {event_start}
                </div>
                <div className="event-show-hero-title">
                  {title}
                </div>
                <div className="event-show-hero-price">
                  {ticket_price}
                </div>
              </figcaption>
            </header>

            <section className="event-show-CTA-container">
              <div className="bookmark-button-event-show">
              </div>
              <button className="event-show-CTA-button"
                onClick={this.handleClick}
              >
                Register Now
              </button>
            </section>

            <section className="event-show-body-container">

            </section>

          </article>
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
