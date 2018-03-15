import { connect } from 'react-redux';
import UserDashboard from './user_dashboard';
import {
	fetchEvent,
	fetchEvents,
	userEvents,
	deleteEvent
} from '../../actions/event_actions';
import { fetchTickets, deleteTicket } from '../../actions/ticket_actions';
import {
	pageIsLoading,
	pageFinishedLoading
} from '../../actions/loading_toggle_actions';
import { addBookmark, removeBookmark } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
	let content, pageType;
	const currentUser = state.session.currentUser;
	const events = state.entities.events;
	switch (ownProps.match.path) {
		case '/my_events':
			pageType = 'userEvents';
			if (state.ui.loading) {
				content = 'loading';
			} else {
				content = currentUser.event_ids.map(id => events[id]);
			}
			break;
		case '/my_tickets':
			pageType = 'userTickets';
			if (state.ui.loading) {
				content = 'loading';
			} else {
				content = currentUser.tickets.map(ticket => ({
					ticket: ticket,
					event: events[ticket.event_id]
				}));
			}
			break;
		case '/my_bookmarks':
			pageType = 'userBookmarks';
			if (state.ui.loading) {
				content = 'loading';
			} else {
				content = currentUser.bookmarked_event_ids.map(
					eventId => events[eventId]
				);
			}
			break;
		default:
	}

	return {
		pageType: pageType,
		content: content,
		currentUser: state.session.currentUser,
		loading: state.ui.loading
	};
};

const mapDispatchToProps = dispatch => ({
	deleteEvent: event => dispatch(deleteEvent(event)),
	deleteTicket: ticket => dispatch(deleteTicket(ticket)),
	fetchEvent: id => dispatch(fetchEvent(id)),
	fetchEvents: () => dispatch(fetchEvents()),
	fetchTickets: () => dispatch(fetchTickets()),
	addBookmark: bookmark => dispatch(addBookmark(bookmark)),
	removeBookmark: eventId => dispatch(removeBookmark(eventId)),
	pageIsLoading: () => dispatch(pageIsLoading()),
	pageFinishedLoading: () => dispatch(pageFinishedLoading())
});

export default connect(mapStateToProps, mapDispatchToProps)(UserDashboard);
