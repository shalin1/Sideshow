import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchEvent, fetchEvents } from '../../actions/event_actions';
import {
	showTicketingModal,
	hideTicketingModal
} from '../../actions/modal_actions';
import { addBookmark, removeBookmark } from '../../actions/session_actions';
import { fetchCategory } from '../../actions/category_actions';
import EventShow from './event_show';

const mapStateToProps = (state, { match }) => {
	const eventId = parseInt(match.params.id);
	const event = state.entities.events[eventId];
	return {
		eventId,
		event,
		errors: state.errors.event,
		currentUser: state.session.currentUser,
		ticketingModalActive: state.ui.ticketingModalActive
	};
};

const mapDispatchToProps = dispatch => ({
	fetchEvent: eventId => dispatch(fetchEvent(eventId)),
	fetchEvents: () => dispatch(fetchEvents()),
	showTicketingModal: () => dispatch(showTicketingModal()),
	addBookmark: bookmark => dispatch(addBookmark(bookmark)),
	removeBookmark: eventId => dispatch(removeBookmark(eventId)),
	fetchCategory: id => dispatch(fetchCategory(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EventShow);
