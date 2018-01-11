import { connect } from 'react-redux';
import UserDashboard from './user_dashboard';
import { fetchEvent, fetchEvents, userEvents, deleteEvent } from '../../actions/event_actions';
import { fetchTickets, deleteTicket } from '../../actions/ticket_actions';
import { pageIsLoading, pageFinishedLoading } from '../../actions/loading_toggle_actions';

const mapStateToProps = (state, ownProps) => {
  let content, pageType;
  const currentUser = state.session.currentUser;
  switch (ownProps.match.path) {
    case '/my_events':
      pageType = "userEvents";
      if (state.ui.loading) {
        content = "loading";
      } else {
        
        content = currentUser.event_ids.map(id => (
          state.entities.events[id]
        ));
      }
      break;
    case '/my_bookmarks':
    case '/my_tickets':
      break;
    default:
  }

  return ({
    pageType: pageType,
    content: content,
    currentUser: state.session.currentUser,
    loading: state.ui.loading,
  });
};

const mapDispatchToProps = dispatch => ({
  deleteEvent: event => dispatch(deleteEvent(event)),
  fetchEvent: id => dispatch(fetchEvent(id)),
  fetchEvents: () => dispatch(fetchEvents()),
  fetchTickets: () => dispatch(fetchTickets()),
  pageIsLoading: () => dispatch(pageIsLoading()),
  pageFinishedLoading: () => dispatch(pageFinishedLoading()),
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard);
