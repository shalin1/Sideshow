import { connect } from 'react-redux';
import UserDashboard from './user_dashboard';
import { fetchEvent, fetchEvents, userEvents, deleteEvent } from '../../actions/event_actions';

const mapStateToProps = (state, ownProps) => {
  let content, pageType;
  let currentUser = state.session.currentUser;
  if (ownProps.match.path === '/myevents') {
    pageType = "userEvents";
    content = currentUser.events;
  } else if (ownProps.match.path === '/mytickets') {
    pageType = "userTickets";
    content = currentUser.tickets;
  } else if (ownProps.match.path === '/bookmarks') {
    pageType = "userBookmarks";
    content = currentUser.bookmarks;
  } else {
    pageType = "uh-oh";
    content = "There's something wrong with your routing in the coutainer";
  }
  return ({
    pageType: pageType,
    content: content,
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
