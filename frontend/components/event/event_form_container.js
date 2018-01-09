import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventForm from './event_form';
import { fetchEvent, createEvent, updateEvent } from '../../actions/event_actions';


const mapStateToProps = (state, ownProps) => {
  let eventData;
  if (ownProps.match.path === "/create") {
    eventData = {
      title: "",
      description: "",
      venue_name: "",
      venue_address: "",
      ticket_price: "",
      tickets_avialable: "",
      event_start: "",
      start_time: "02:00",
      event_end: "",
      end_time: "23:59",
      imageFile: null,
      imageUrl: null,
      published: false
    };
  } else {
    eventData = state.events[ownProps.match.params.eventId];
  }
  return {event: eventData};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.match.path === "/create") ? createEvent : updateEvent;
  return ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    action: event => dispatch(action(event))
  });
};

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(EventForm));
