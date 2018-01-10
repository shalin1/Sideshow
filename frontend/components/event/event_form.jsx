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

  handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData();
    console.log(this.state);
    console.log('before:' + formData);
    formData.append("event[event_start]", this.state.start_date);
    formData.append("event[event_end]", this.state.end_date);
    formData.append("event[title]", this.state.title);
    formData.append("event[description]", this.state.description);
    formData.append("event[venue_name]", this.state.venue_name);
    formData.append("event[venue_address]", this.state.venue_address);
    formData.append("event[ticket_price]", this.state.ticket_price);
    formData.append("event[tickets_available]", this.state.tickets_available);
    formData.append("event[organizer_id]", this.state.organizer_id);
    if (this.state.imageFile) {
      formData.append("event[hero_image]", this.state.imageFile);
    }
    this.props.action(formData);
  }

  componentDidMount() {
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
        this.setState({ imageUrl: "", imageFile: null });
      }

    };
  }


  renderErrors() {
    return(
      <ul>
        {this.props.errors.session.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render () {
    const uploadedImage = {
      backgroundImage: 'url(' + this.state.imageUrl + ')',
    };

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
          </label>

          <br/>

          <label className="event-form-label">Price
            <div className="event-form-text-input-container">
              <input
                className="event-form-price-input"
                type="text"
                value={this.state.ticket_price}
                onChange={this.update("ticket_price")}
                placeholder="$"
              />
            </div>
          </label>

          <br/>

          <section className="event-form-datetime-row">
            <div className="event-form-datetime-container">
              <label className="event-form-label">Start
                <Flatpickr data-enable-time
                  className="event-form-datetime-input"
                  value={this.state.start_date}
                  onChange={this.update("start_date")}
                  options={
                    {
                      enableTime:true,
                      altInput:true,
                      defaultDate: "2018-02-26T20:00"
                    }
                  }
                />
              </label>
            </div>

            <div className="event-form-datetime-container">
              <label className="event-form-label">End
                <Flatpickr data-enable-time
                  className="event-form-datetime-input"
                  value={this.state.end_date}
                  onChange={this.update("end_date")}
                  options={
                    {
                      enableTime:true,
                      altInput:true,
                      defaultDate: "2018-02-26T20:00"
                    }
                  }
                />
              </label>
            </div>

          </section>

          <br/>

          <label className="event-form-label">Event Image
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
          <br/>

          <label className="event-form-label">Event Description
            <div className="event-form-rich-text-container">
              <textarea className="event-form-rich-text" value={this.state.description} onChange={this.update('description')} />
            </div>
          </label>

        </form>
        <div className="event-form-button-container">
          <h1 className="event-form-button-caption">
            Nice job! You're almost done.
          </h1>
          <div className="event-form-button-container-flex">
          <button
            onClick={this.handleSubmit}
            className="event-form-button-plain"
          >
            Save
          </button>
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
export default EventForm;
