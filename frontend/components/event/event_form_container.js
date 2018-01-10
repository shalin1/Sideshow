import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EventForm from './event_form';
import { fetchEvent, createEvent, updateEvent } from '../../actions/event_actions';


const mapStateToProps = (state, ownProps) => {
  let eventData, formType;
  if (ownProps.match.path === "/create") {
    formType="new";
    eventData = {
      title: "",
      description: "",
      venue_name: "",
      venue_address: "",
      ticket_price: "",
      tickets_available: 100,
      event_start: Date.now(),
      event_end: Date.now(),
      imageFile: null,
      imageUrl: null,
      published: false,
    };
  } else {
    eventData = state.entities.events[ownProps.match.params.id];
    formType = "edit"
  }
  return {event: eventData};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = (ownProps.match.path === "/create") ? createEvent : updateEvent;
  console.log(action);
  return ({
    fetchEvent: eventId => dispatch(fetchEvent(eventId)),
    action: event => dispatch(action(event))
  });
};

export default withRouter(connect (
  mapStateToProps,
  mapDispatchToProps
)(EventForm));
