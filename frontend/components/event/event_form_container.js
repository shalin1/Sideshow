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
      tickets_available: "",
      start_date: "2018-02-26T20:00:00.000Z",
      end_date: "2018-02-27T05:00:00.000Z",
      imageFile: null,
      imageUrl: null,
      published: false,
    };
  } else {
    debugger
    eventData = state.entities.events[ownProps.match.params.id];
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
