import React from 'react';
import 'react-dates/initialize';
import { Link, withRouter, Redirect } from 'react-router-dom';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import Flatpickr from 'react-flatpickr';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.event;
    this.setState = this.setState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
    this.update = this.update.bind(this);
  }

  componentWillMount() {
    window.scrollTo(0, 0);
    if (this.props.match.params.id) {
      this.props.fetchEvent(this.props.match.params.id);
    }
  }

  componentWillUnmount() {
    this.props.resetErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    formData.append("event[event_start]", this.state.event_start);
    formData.append("event[event_end]", this.state.event_end);
    formData.append("event[title]", this.state.title);
    formData.append("event[description]", this.state.description);
    formData.append("event[venue_name]", this.state.venue_name);
    formData.append("event[venue_address]", this.state.venue_address);
    formData.append("event[ticket_price]", this.state.ticket_price);
    formData.append("event[tickets_available]", 100);
    formData.append("event[organizer_id]", this.state.organizer_id);
    if (this.state.imageFile) {
      formData.append("event[hero_image]", this.state.imageFile);
    }
    if (this.state.id) {
      formData.append("event[id]", this.state.id);
    }
    this.props.resetErrors();
    this.props.action(formData).then(
      (event) => this.props.history.push(`/events/${event.id}`)
    );
  }


  update(attribute) {
    return (e) => {
      this.setState({[attribute]: e.target.value});
    };
  }

  updateFile() {
    return (e) => {
      e.preventDefault();
      const reader = new FileReader();
      const file = e.currentTarget.files[0];
      reader.onloadend = () =>
        this.setState({ imageUrl: reader.result, imageFile: file});
      if (file) {
        reader.readAsDataURL(file);
      } else {
        this.setState({ eventShowUrl: "https://s3.amazonaws.com/sideshow-development/Screen+Shot+2018-01-10+at+5.09.04+PM.png" });
      }
    };
  }


  renderErrors(field) {
    if (this.props.errors !== undefined) {
      return(
        <ul className="form-errors">
          {this.props.errors[field].map((error, i) => (
            <li key={`error-${i}`} className="form-error-message">
              {error}
            </li>
          ))}
        </ul>
      );
    } else {
      return(<h1 className="form-errors">errors not loaded</h1>);
    }
  }

  render () {
    if (this.props.event === {} || this.state === null) {
      return (
        <div className="loading">loading...</div>
      );
    } else {
      let uploadedImage;
        if (this.state.imageUrl) {
          uploadedImage = {backgroundImage: 'url(' + this.state.imageUrl + ')'};
        } else {
          uploadedImage = {backgroundImage: 'url(' + this.state.event_show_image_url + ')'};
        }


      return (
        <section className="event-form-container">
          <form className="event-form">

            <div className="event-form-section-container">
              <div className="event-form-section-box">1</div>
              <div className="event-form-section-text">Event Details</div>
            </div>

            <br/>

            <label className="event-form-label">Event Title
              <div className="event-form-text-input-container">
                <input
                  className="event-form-text-input"
                  type="text"
                  value={this.state.title}
                  onChange={this.update("title")}
                  placeholder="Give it a short distinct name"
                />
              </div>
              {this.renderErrors("title")}
            </label>

            <br/>

            <label className="event-form-label">Venue
              <div className="event-form-text-input-container">
                <input
                  className="event-form-text-input"
                  type="text"
                  value={this.state.venue_name}
                  onChange={this.update("venue_name")}
                  placeholder="Enter the venue's name"
                />
              </div>
              {this.renderErrors("venue_name")}
            </label>

            <br/>

            <label className="event-form-label">Address
              <div className="event-form-text-input-container">
                <input
                  className="event-form-text-input"
                  type="text"
                  value={this.state.venue_address}
                  onChange={this.update("venue_address")}
                  placeholder="Enter the venue's address"
                />
              </div>
              {this.renderErrors("venue_address")}
            </label>

            <br/>

            <label className="event-form-label">Price
              <div className="event-form-text-input-container">
                <input
                  className="event-form-price-input"
                  type="number"
                  step="0.01"
                  value={this.state.ticket_price}
                  onChange={this.update("ticket_price")}
                  placeholder="$"
                />
              </div>
              {this.renderErrors("ticket_price")}
            </label>

            <br/>

            <section className="event-form-datetime-row">
              <div className="event-form-datetime-container">
                <label className="event-form-label">Start</label>

                <Flatpickr data-enable-time
                  className="event-form-datetime-input"
                  value={this.state.event_start}
                  onChange={event_start => { this.setState({event_start}); }}
                  options={
                    {
                        dateFormat: "M j, h:iK",
                        altFormat: "M j, h:iK",
                        enableTime:true,
                        altInput:true,
                        defaultHour: "22"
                    }
                  }
                />
              </div>
              {this.renderErrors("event_start")}
              <div className="event-form-datetime-container">
                <label className="event-form-label">End              </label>

                <Flatpickr data-enable-time
                  className="event-form-datetime-input"
                  value={this.state.event_end}
                  onChange={event_end => { this.setState({event_end}); }}
                  options={
                    {
                        altFormat: "M j, h:iK",
                        enableTime:true,
                        altInput:true,
                    }
                  }
                />
              </div>

            </section>

            <br/>

            <label className="event-form-label">
              Event Image
              <div className="event-image-upload-container">
                <div
                  className="event-form-image-upload-landingpad"
                  style={uploadedImage}
                >
                  <input
                    type="file"
                    onChange={this.updateFile()}
                  className="event-image-upload-button"/>
                </div>
              </div>
            </label>
            {this.renderErrors("imageUrl")}


            <br/>

            <label className="event-form-label">Event Description
              <div className="event-form-rich-text-container">
              </div>
            </label>
            <textarea className="event-form-rich-text" value={this.state.description} onChange={this.update('description')} />
            {this.renderErrors("description")}

          </form>
          <div className="event-form-button-container">
            <h1 className="event-form-button-caption">
              Nice job! You're almost done.
            </h1>
            <div className="event-form-button-container-flex">

              <button
                onClick={this.handleSubmit}
                className="event-form-button-emphasis"
              >
                Make Your Event Live
              </button>
            </div>

          </div>
        </section>
      );
    }
  }
}

export default EventForm;
