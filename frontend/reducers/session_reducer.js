import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { REMOVE_EVENT } from '../actions/event_actions';
import { RECEIVE_TICKET } from '../actions/ticket_actions';
const defaultState = Object.freeze({currentUser: null});

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.user};
    case REMOVE_EVENT:
      let new_ids =  state.currentUser.event_ids.filter(id => id !== action.event.id);
      let new_event_user = Object.assign( {}, state.currentUser, {event_ids: new_ids} );
      return {currentUser: new_event_user};
    case RECEIVE_TICKET:
      let new_tickets = state.currentUser.tickets.concat(action.ticket);
      let new_ticket_user = Object.assign( {}, state.currentUser, {tickets: new_tickets});
      return {currentUser: new_ticket_user};
    default:
      return state;
  }
};
