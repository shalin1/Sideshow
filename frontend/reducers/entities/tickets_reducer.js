import { RECEIVE_TICKET, REMOVE_TICKET, RECEIVE_TICKETS } from '../../actions/ticket_actions';
import merge from 'lodash/merge';

const defaultState = {};

const ticketReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TICKETS:
      return merge({}, action.tickets);
    case RECEIVE_TICKET:
      const newTicket = {[action.ticket.id]:action.ticket} ;
      return merge({}, oldState, newTicket);
    case REMOVE_TICKET:
      let nextState = merge({}, oldState);
      delete nextState[action.ticket.id];
      
      return nextState;
    default:
      return oldState;
  }
};

export default ticketReducer;
