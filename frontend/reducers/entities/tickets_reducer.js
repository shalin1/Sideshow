import { RECEIVE_TICKET } from '../../actions/ticket_actions';
import merge from 'lodash/merge';

const defaultState = {};

const ticketReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_TICKET:
      const newTicket = {[action.ticket.id]:action.ticket} ;
      return merge({}, oldState, newTicket);
    default:
      return oldState;
  }
};

export default ticketReducer;
