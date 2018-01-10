import { connect } from 'react-redux';
import UserDashboard from './user_dashboard';
import { fetchEvents, deleteEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  let displayedEvents, pageType;
  if (ownProps.match.path === '/myevents') {
    pageType = "userEvents"
    displayedEvents = state.entities.events// TODO: show events be
  } else {
    pageType = "error"
    displayedEvents = "There's something wrong with your routing in the coutainer"
  }
  return ({
    pageType: pageType
    events: displayedEvents,
  });
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: () => dispatch(fetchEvents()),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard);
