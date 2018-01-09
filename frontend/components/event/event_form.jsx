import React from 'react';
import 'react-dates/initialize';
import { Link, withRouter, Redirect } from 'react-router-dom';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

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
    console.log(formData);
    formData.append("event[event_start]", this.state.start_date);
    formData.append("event[event_end]", this.state.end_date);
    formData.append("event[title]", this.state.title);
    formData.append("event[description]", this.state.description);
    formData.append("event[venue_name]", this.state.venue_name);
    formData.append("event[venue_address]", this.state.venue_address);
    formData.append("event[ticket_price]", this.state.ticket_price);
    formData.append("event[tickets_available]", this.state.tickets_available);
    formData.append("event[organizer_id]", this.state.organizer_id);
    formData.append("event[hero_image]", this.state.imageFile);
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

          <section className="event-form-datetime-container">
            <div className="event-form-datetime-input">
                <label className="event-form-label">Starts</label>

                <div className="">
                  <div className="">
                    <SingleDatePicker
                      date={this.state.start_date} // momentPropTypes.momentObj or null
                      onDateChange={start_date => this.setState({ start_date })} // PropTypes.func.isRequired
                      focused={this.state.start_date_focus} // PropTypes.bool
                      onFocusChange={({ focused: start_date_focus }) => this.setState({ start_date_focus })} // PropTypes.func.isRequired
                    />

                  </div>
                  <div className="event-form-datetime-time-container">
                    <select
                      className="event-form-datetime-time"
                      value={this.state.start_time}
                      onChange={this.update("start_time")}
                    >
                      <option className="event-form-datetime-time-option" value="Midnight">Midnight</option>
                      <option className="event-form-datetime-time-option" value="12:30">12:30AM</option>
                      <option className="event-form-datetime-time-option" value="1:00AM">1:00AM</option>
                      <option className="event-form-datetime-time-option" value="1:30AM">1:30AM</option>
                      <option className="event-form-datetime-time-option" value="2:00AM">2:00AM</option>
                      <option className="event-form-datetime-time-option" value="2:30AM">2:30AM</option>
                      <option className="event-form-datetime-time-option" value="3:00AM">3:00AM</option>
                      <option className="event-form-datetime-time-option" value="3:30AM">3:30AM</option>
                      <option className="event-form-datetime-time-option" value="4:00AM">4:00AM</option>
                      <option className="event-form-datetime-time-option" value="4:30AM">4:30AM</option>
                      <option className="event-form-datetime-time-option" value="5:00AM">5:00AM</option>
                      <option className="event-form-datetime-time-option" value="5:30AM">5:30AM</option>
                      <option className="event-form-datetime-time-option" value="6:00AM">6:00AM</option>
                      <option className="event-form-datetime-time-option" value="6:30AM">6:30AM</option>
                      <option className="event-form-datetime-time-option" value="7:00AM">7:00AM</option>
                      <option className="event-form-datetime-time-option" value="7:30AM">7:30AM</option>
                      <option className="event-form-datetime-time-option" value="8:00AM">8:00AM</option>
                      <option className="event-form-datetime-time-option" value="8:30AM">8:30AM</option>
                      <option className="event-form-datetime-time-option" value="9:00AM">9:00AM</option>
                      <option className="event-form-datetime-time-option" value="9:30AM">9:30AM</option>
                      <option className="event-form-datetime-time-option" value="10:00AM">10:00AM</option>
                      <option className="event-form-datetime-time-option" value="10:30AM">10:30AM</option>
                      <option className="event-form-datetime-time-option" value="11:00AM">11:00AM</option>
                      <option className="event-form-datetime-time-option" value="11:30AM">11:30AM</option>
                      <option className="event-form-datetime-time-option" value="Noon">Noon</option>
                      <option className="event-form-datetime-time-option" value="12:30AM">12:30AM</option>
                      <option className="event-form-datetime-time-option" value="1:00AM">1:00AM</option>
                      <option className="event-form-datetime-time-option" value="1:30AM">1:30AM</option>
                      <option className="event-form-datetime-time-option" value="2:00AM">2:00AM</option>
                      <option className="event-form-datetime-time-option" value="2:30AM">2:30AM</option>
                      <option className="event-form-datetime-time-option" value="3:00AM">3:00AM</option>
                      <option className="event-form-datetime-time-option" value="3:30AM">3:30AM</option>
                      <option className="event-form-datetime-time-option" value="4:00AM">4:00AM</option>
                      <option className="event-form-datetime-time-option" value="4:30AM">4:30AM</option>
                      <option className="event-form-datetime-time-option" value="5:00AM">5:00AM</option>
                      <option className="event-form-datetime-time-option" value="5:30AM">5:30AM</option>
                      <option className="event-form-datetime-time-option" value="6:00AM">6:00AM</option>
                      <option className="event-form-datetime-time-option" value="6:30AM">6:30AM</option>
                      <option className="event-form-datetime-time-option" value="7:00AM">7:00AM</option>
                      <option className="event-form-datetime-time-option" value="7:30AM">7:30AM</option>
                      <option className="event-form-datetime-time-option" value="8:00AM">8:00AM</option>
                      <option className="event-form-datetime-time-option" value="8:30AM">8:30AM</option>
                      <option className="event-form-datetime-time-option" value="9:00AM">9:00AM</option>
                      <option className="event-form-datetime-time-option" value="9:30AM">9:30AM</option>
                      <option className="event-form-datetime-time-option" value="10:00AM">10:00AM</option>
                      <option className="event-form-datetime-time-option" value="10:30AM">10:30AM</option>
                      <option className="event-form-datetime-time-option" value="11:00AM">11:00AM</option>
                      <option className="event-form-datetime-time-option" value="11:30AM">11:30AM</option>
                    </select>

                  </div>
                </div>
            </div>
            <div className="event-form-datetime-input">
                <label className="event-form-label">Ends</label>

                <div className="event-form-datetime-input-row">
                  <div className="">
                    <SingleDatePicker
                      date={this.state.end_date} // momentPropTypes.momentObj or null
                      onDateChange={end_date => this.setState({ end_date })} // PropTypes.func.isRequired
                      focused={this.state.end_date_focus} // PropTypes.bool
                      onFocusChange={({ focused: end_date_focus }) => this.setState({ end_date_focus })} // PropTypes.func.isRequired
                    />
                  </div>
                  <div className="event-form-datetime-time-container">
                    <select
                      className="event-form-datetime-time"
                      value={this.state.end_time}
                      onChange={this.update("end_time")}
                    >
                      <option className="event-form-datetime-time-option" value="Midnight">Midnight</option>
                      <option className="event-form-datetime-time-option" value="12:30">12:30AM</option>
                      <option className="event-form-datetime-time-option" value="1:00AM">1:00AM</option>
                      <option className="event-form-datetime-time-option" value="1:30AM">1:30AM</option>
                      <option className="event-form-datetime-time-option" value="2:00AM">2:00AM</option>
                      <option className="event-form-datetime-time-option" value="2:30AM">2:30AM</option>
                      <option className="event-form-datetime-time-option" value="3:00AM">3:00AM</option>
                      <option className="event-form-datetime-time-option" value="3:30AM">3:30AM</option>
                      <option className="event-form-datetime-time-option" value="4:00AM">4:00AM</option>
                      <option className="event-form-datetime-time-option" value="4:30AM">4:30AM</option>
                      <option className="event-form-datetime-time-option" value="5:00AM">5:00AM</option>
                      <option className="event-form-datetime-time-option" value="5:30AM">5:30AM</option>
                      <option className="event-form-datetime-time-option" value="6:00AM">6:00AM</option>
                      <option className="event-form-datetime-time-option" value="6:30AM">6:30AM</option>
                      <option className="event-form-datetime-time-option" value="7:00AM">7:00AM</option>
                      <option className="event-form-datetime-time-option" value="7:30AM">7:30AM</option>
                      <option className="event-form-datetime-time-option" value="8:00AM">8:00AM</option>
                      <option className="event-form-datetime-time-option" value="8:30AM">8:30AM</option>
                      <option className="event-form-datetime-time-option" value="9:00AM">9:00AM</option>
                      <option className="event-form-datetime-time-option" value="9:30AM">9:30AM</option>
                      <option className="event-form-datetime-time-option" value="10:00AM">10:00AM</option>
                      <option className="event-form-datetime-time-option" value="10:30AM">10:30AM</option>
                      <option className="event-form-datetime-time-option" value="11:00AM">11:00AM</option>
                      <option className="event-form-datetime-time-option" value="11:30AM">11:30AM</option>
                      <option className="event-form-datetime-time-option" value="Noon">Noon</option>
                      <option className="event-form-datetime-time-option" value="12:30AM">12:30AM</option>
                      <option className="event-form-datetime-time-option" value="1:00AM">1:00AM</option>
                      <option className="event-form-datetime-time-option" value="1:30AM">1:30AM</option>
                      <option className="event-form-datetime-time-option" value="2:00AM">2:00AM</option>
                      <option className="event-form-datetime-time-option" value="2:30AM">2:30AM</option>
                      <option className="event-form-datetime-time-option" value="3:00AM">3:00AM</option>
                      <option className="event-form-datetime-time-option" value="3:30AM">3:30AM</option>
                      <option className="event-form-datetime-time-option" value="4:00AM">4:00AM</option>
                      <option className="event-form-datetime-time-option" value="4:30AM">4:30AM</option>
                      <option className="event-form-datetime-time-option" value="5:00AM">5:00AM</option>
                      <option className="event-form-datetime-time-option" value="5:30AM">5:30AM</option>
                      <option className="event-form-datetime-time-option" value="6:00AM">6:00AM</option>
                      <option className="event-form-datetime-time-option" value="6:30AM">6:30AM</option>
                      <option className="event-form-datetime-time-option" value="7:00AM">7:00AM</option>
                      <option className="event-form-datetime-time-option" value="7:30AM">7:30AM</option>
                      <option className="event-form-datetime-time-option" value="8:00AM">8:00AM</option>
                      <option className="event-form-datetime-time-option" value="8:30AM">8:30AM</option>
                      <option className="event-form-datetime-time-option" value="9:00AM">9:00AM</option>
                      <option className="event-form-datetime-time-option" value="9:30AM">9:30AM</option>
                      <option className="event-form-datetime-time-option" value="10:00AM">10:00AM</option>
                      <option className="event-form-datetime-time-option" value="10:30AM">10:30AM</option>
                      <option className="event-form-datetime-time-option" value="11:00AM">11:00AM</option>
                      <option className="event-form-datetime-time-option" value="11:30AM">11:30AM</option>
                    </select>

                  </div>
                </div>
            </div>
          </section>

          <br/>

          <label className="event-form-label">Event Image
            <div className="event-image-upload-container">
              <div
                className="event-form-image-upload-landingpad"
                style={uploadedImage}
              >
                <input type="file" onChange={this.updateFile()} />
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
