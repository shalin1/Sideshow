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
        <form>
          <div>
            <span className="event-icon-box">1</span>
            <span className="event-form-section-head">Event Details</span>
          </div>
          <br/>
          <label>Event Title
            <div className="event-form-text-input-container">
              <input
                className="event-form-text-input"
                value={this.state.title}
                onChange={this.update("title")}
                ref={(input) => { this.nameInput = input; }}
              />
            </div>
          </label>
          <br/>
          <label>Venue
            <input
              value={this.state.venue}
              onChange={this.update("venue")}
              className="event-form-text-input"
            />
          </label>
          <br/>
          <label>Address
            <input className="event-form-text-input" />
          </label>
          <br/>

          <section className="form-datetime-container">

            <div>
              <label>Starts
                <input className="event-form-text-input" />
                <select>
                  <option value="10:30">10:30am</option>
                  <option value="22:30">10:30pm</option>
                </select>
              </label>
            </div>

            <div>
              <label>Ends
                <input className="form-input-box" />
                <select>
                  <option value="10:30">10:30am</option>
                  <option value="22:30">10:30pm</option>
                </select>
              </label>
            </div>

          </section>
          <br/>

          <label>Event Image
            <div className="event-image-upload-container">
              <div
                className="event-form-image-upload-landingpad">
              </div>
            </div>
          </label>
          <br/>

          <label>Event Description
            <div className="form-rich-text-editor">
              <textarea value={this.state.description} onChange={this.update('description')} />
            </div>
          </label>

        </form>
      </section>
    );

  }
}
export default EventForm;
