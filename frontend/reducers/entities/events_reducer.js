import {
	RECEIVE_EVENTS,
	RECEIVE_EVENT,
	REMOVE_EVENT
} from '../../actions/event_actions';
import merge from 'lodash/merge';

const defaultState = {};

const eventsReducer = (oldState = defaultState, action) => {
	Object.freeze(oldState);
	switch (action.type) {
		case RECEIVE_EVENTS:
			return merge({}, action.events);
		case RECEIVE_EVENT:
			const newEvent = { [action.event.id]: action.event };
			return merge({}, oldState, newEvent);
		case REMOVE_EVENT:
			let nextState = merge({}, oldState);
			delete nextState[action.event.id];
			return nextState;
		default:
			return oldState;
	}
};

export default eventsReducer;
