import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    this.props.fetchEvent(this.props.eventId);
    window.scrollTo(0, 0);
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
                    Jan
                  </span>
                  <br/>
                  <span className="event-show-hero-date-lg">
                    10
                  </span>
                  <br/>
                  <br/>
                  <span className="event-show-hero-title">
                    {title}
                  </span>
                </div>
                <div className="event-show-hero-price">
                  ${ticket_price}
                </div>
              </figcaption>
            </header>

            <section className="event-show-CTA-container">
              <button className="event-show-CTA-bookmark">
                <i className="fa fa-bookmark-o fa-2x" aria-hidden="true" />
              </button>
              <div>
                <button className="event-show-CTA-button"
                  onClick={this.handleClick}
                  >
                  Register Now
                </button>
              </div>
            </section>

            <section className="event-show-body-container">
              <article className="event-show-body-description">
                  <h3 className="label-primary">Description</h3>
                  <br/>
                  {description}
              </article>
              <aside className="event-show-body-aside">
                <h3 className="label-primary">Location</h3>
                <br/>
                {venue_name}
                <br/>
                {venue_address}
              </aside>
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
