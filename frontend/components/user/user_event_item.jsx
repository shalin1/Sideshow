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

    const eventStart = moment(event_start).format("MMM D YYYY h:mm A");

    return (
      <article className="user-dashboard-ownevents-item-container">
        <div className="user-dashboard-ownevents-item-title">
          {title}
        </div>
        <div className="user-dashboard-ownevents-item-date">
          {eventStart}
        </div>
        <div className="user-dashboard-ownevents-item-actions">
          <Link to={`/events/${id}`}>
            <i className="fa fa-eye" aria-hidden="true"> </i>
            View Event
          </Link>
          <Link to={`/events/${id}/edit`}>
            <i className="fa fa-pencil" aria-hidden="true"> </i>
            Edit Event
          </Link>
          <button onClick={this.handleDelete} >
            <i className="fa fa-trash-o" aria-hidden="true"> </i>
            Delete Event
          </button>
        </div>
      </article>
    );
  }
}

export default withRouter(UserEvents);
