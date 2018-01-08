import React from 'react';


class EventForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
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
            <input className="form-input-box" />
          </label>
          <br/>
          <label>Venue
            <input className="form-input-box" />
          </label>
          <br/>
          <label>Address
            <input className="form-input-box" />
          </label>
          <br/>
          <label>Starts
            <input className="form-input-box" />
            <select>
              <option value="10:30">10:30am</option>
              <option value="22:30">10:30pm</option>
            </select>
          </label>
          <label>Ends
            <input className="form-input-box" />
            <select>
              <option value="10:30">10:30am</option>
              <option value="22:30">10:30pm</option>
            </select>
          </label>

        </form>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
        <div>
          foo bar
        </div>
      </section>
    );
  }
}

export default EventForm;
