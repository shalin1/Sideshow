import { connect } from 'react-redux';
import UserDashboard from './user_dashboard';
import { fetchCurrentUserEvents, deleteEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  let displayedEvents, pageType;
  if (ownProps.match.path === '/myevents') {
    pageType = "userEvents";
    displayedEvents = Object.values(state.entities.events);
  } else {
    pageType = "error";
    displayedEvents = "There's something wrong with your routing in the coutainer";
  }
  return ({
    pageType: pageType,
    events: displayedEvents,
    currentUser: state.session.currentUser,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
  deleteEvent: event => dispatch(deleteEvent(event))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard);
