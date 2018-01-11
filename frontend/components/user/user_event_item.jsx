import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';

class UserEvents extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    this.props.deleteEvent(this.props.event);
  }

  render() {

    const {
      id, title, event_start, tickets_available, tickets, event_show_url
    } = this.props.event;

    const eventStart = moment(event_start).format("ddd, MMM D h:mm A");

    return (
      <article className="user-dashboard-ownevents-item-container">
        <div className="user-dashboard-ownevents-item-date">
          {eventStart}
        </div>
        <div className="user-dashboard-ownevents-item-title">
          {title}
        </div>
        <div className="user-dashboard-ownevents-item-actions">
          <Link to={`/events/${id}`}>
            View<br/>Event
          </Link>
          <Link to={`/events/${id}/edit`}>
            Edit<br/>Event
          </Link>
          <button
            className="user-dashboard-button"
            onClick={this.handleDelete}
          >
            Delete<br/>Event
          </button>
        </div>
      </article>
    );
  }
}

export default withRouter(UserEvents);
