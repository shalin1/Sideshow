import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      venue_name: "",
      venue_address: "",
      ticket_price: "",
      tickets_avialable: "",
      start_date: "",
      start_time: "",
      end_date: "",
      end_time: "",
      organizer_id: "props.currentUser.id",
      image_url: "hmmmmmmmmmmm",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    this.props.userExists({email});
  }

  componentDidMount() {
    this.nameInput.focus();
  }

  update(attribute) {
    return (e) => {
      this.setState({[attribute]: e.target.value});
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
                ref={(input) => { this.nameInput = input; }}
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
                value={this.state.venue}
                onChange={this.update("venue")}
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
                value={this.state.address}
                onChange={this.update("address")}
                placeholder="Enter the venue's address"
              />
            </div>
          </label>

          <br/>

          <section className="event-form-datetime-container">
            <div className="event-form-datetime-input">
                <label className="event-form-label">Starts</label>

                <div className="event-form-datetime-input-row">
                  <div className="event-form-datetime-calendar-container">
                    <input
                      className="event-form-datetime-calendar"
                      value={this.state.start_date}
                      onChange={this.update("start_date")}
                      placeholder="02/17/2018"
                    />
                  </div>
                  <div className="event-form-datetime-time-container">
                    <select
                      className="event-form-datetime-time"
                      value={this.state.start_time}
                      onChange={this.update("start_date")}
                    >
                      <option className="event-form-datetime-time-option" value="23:59">11:59pm</option>
                      <option className="event-form-datetime-time-option" value="00:00">Midnight</option>
                      <option className="event-form-datetime-time-option" value="02:00">2:00am</option>
                      <option className="event-form-datetime-time-option" value="06:00">6:00am</option>
                    </select>

                  </div>
                </div>
            </div>
            <div className="event-form-datetime-input">
                <label className="event-form-label">Ends</label>

                <div className="event-form-datetime-input-row">
                  <div className="event-form-datetime-calendar-container">
                    <input
                      className="event-form-datetime-calendar"
                      value={this.state.end_date}
                      onChange={this.update("end_date")}
                      placeholder="02/17/2018"
                    />
                  </div>
                  <div className="event-form-datetime-time-container">
                    <select
                      className="event-form-datetime-time"
                      value={this.state.end_time}
                      onChange={this.update("end_date")}
                    >
                      <option className="event-form-datetime-time-option" value="23:59">11:59pm</option>
                      <option className="event-form-datetime-time-option" value="00:00">Midnight</option>
                      <option className="event-form-datetime-time-option" value="02:00">2:00am</option>
                      <option className="event-form-datetime-time-option" value="06:00">6:00am</option>
                    </select>

                  </div>
                </div>
            </div>
          </section>

          <br/>

          <label className="event-form-label">Event Image
            <div className="event-image-upload-container">
              <div
                className="event-form-image-upload-landingpad">
              </div>
            </div>
          </label>
          <br/>

          <label className="event-form-label">Event Description
            <div className="event-form-rich-text-container">
              <textarea className="event-form-rich-text" value={this.state.description} onChange={this.update('description')} />
            </div>
          </label>

          <div className="event-form-submit">
            <button
              onClick={this.handleSaveEvent}
              className="form-button-plain"
            >
              Save
            </button>
            <button
              onClick={this.handlePublishEvent}
              className="form-button-emphasis"
            >
              Make Your Event Live
            </button>

          </div>
        </form>
      </section>
    );

  }
}
export default EventForm;
