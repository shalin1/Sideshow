import React from 'react';
import { Link } from 'react-router-dom';

class EventShow extends React.Component {
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
          <section className="event-show-container">
            <section className="event-show-hero">
              <div className="event-show-hero-image" style={eventImage}></div>
              <div className="event-show-hero-info-container">
                <div className="event-show-hero-date">
                  {event_start}
                  {title}
                  {ticket_price}
                </div>
              </div>
            </section>
            <section>
              <div className="bookmark-button-event-show">
                
              </div>
            </section>
          </section>
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
