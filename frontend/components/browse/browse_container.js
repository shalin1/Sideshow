import { connect } from 'react-redux';

import Browse from './browse';
import { fetchEvents } from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions'
import { addBookMark, removeBookmark } from '../../actions/session_actions'

const mapStateToProps = (state, { match }) => {
  const categoryId = parseInt(match.params.id);
  return ({
    events: Object.values(state.entities.events),
    currentUser: state.session.currentUser,
    categories: Object.values(state.entities.categories)
  });
};

const mapDispatchToProps = dispatch => ({
  fetchEvents: filter => dispatch(fetchEvents(filter)),
  fetchCategories: () => dispatch(fetchCategories()),
  addBookmark: bookmark => dispatch(addBookmark(bookmark)),
  removeBookmark: eventId => dispatch(removeBookmark(eventId))
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Browse);
