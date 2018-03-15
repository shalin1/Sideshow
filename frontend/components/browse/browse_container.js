import { connect } from 'react-redux';

import Browse from './browse';
import { fetchEvents, fetchCategory } from '../../actions/event_actions';
import { fetchCategories } from '../../actions/category_actions';
import { addBookmark, removeBookmark } from '../../actions/session_actions';

const mapStateToProps = (state, { match }) => {
	const categoryId = parseInt(match.params.id);
	return {
		events: Object.values(state.entities.events),
		currentUser: state.session.currentUser,
		categories: Object.values(state.entities.categories)
	};
};

const mapDispatchToProps = dispatch => ({
	fetchEvents: category => dispatch(fetchEvents(category)),
	fetchCategories: () => dispatch(fetchCategories()),
	fetchCategory: name => dispatch(fetchCategory(name)),
	addBookmark: bookmark => dispatch(addBookmark(bookmark)),
	removeBookmark: eventId => dispatch(removeBookmark(eventId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Browse);
