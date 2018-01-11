import { connect } from 'react-redux';
import UserDashboard from './user_dashboard';
import { fetchEvent, fetchEvents, userEvents, deleteEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  let displayedEvents, pageType;
  if (ownProps.match.path === '/myevents') {
    pageType = "userEvents";
    displayedEvents = state.session.currentUser.events;

  } else {
    pageType = "error";
    displayedEvents = "There's something wrong with your routing in the coutainer";
  }
  return ({
    pageType: pageType,
    events: displayedEvents,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  deleteEvent: event => dispatch(deleteEvent(event)),
  fetchEvent: id => dispatch(fetchEvent(id)),
  fetchEvents: () => dispatch(fetchEvents())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard);
