import { connect } from 'react-redux';

import EventIndex from './event_index';
import { fetchEvents } from '../../actions/event_actoins';
import { addBookMark, removeBookmark } from '../../actions/session_actions'

cont mapStateToProps = (state, { match }) => {
  const categoryId = parseInt(match.params.id);
  return ({
    events: Object.values(state.entities.events),
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: filter => dispatch(fetchEvents(filter)),
  addBookmark: bookmark => dispatch(addBookmark(bookmark)),
  removeBookmark: eventId => dispatch(removeBookmark(eventId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(EventIndex);
