import { connect } from 'react-redux';
import UserDashboard from './user_dashboard';
import { fetchEvent, fetchEvents, userEvents, deleteEvent } from '../../actions/event_actions';
import { fetchTickets, deleteTicket } from '../../actions/ticket_actions';

const mapStateToProps = (state, ownProps) => {
  let content, pageType;
  let currentUser = state.session.currentUser;
  if (ownProps.match.path === '/my_events' || ownProps.match.path === 'my_dashboard') {
    console.log("rendering myEvents");
    pageType = "userEvents";
    content = currentUser.event_ids.map( event_id => (
      state.entities.events.event_id
    ));
  } else if (ownProps.match.path === '/my_tickets') {
    console.log("rendering myTickets");
    pageType = "userTickets";
    content = currentUser.tickets;
  } else if (ownProps.match.path === '/my_bookmarks') {
    console.log("rendering myBookmarks");
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
  fetchEvents: () => dispatch(fetchEvents()),
  fetchTickets: () => dispatch(fetchTickets())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(UserDashboard);
