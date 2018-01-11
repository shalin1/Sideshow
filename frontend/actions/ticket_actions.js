import * as APIUtil from '../util/ticket_api_util';

export const RECEIVE_TICKET = 'RECEIVE_TICKET';
export const RECEIVE_TICKET_ERRORS = 'RECEIVE_TICKET_ERRORS';


const receiveErrors = errors => {
  return {
    type: RECEIVE_TICKET_ERRORS,
    errors
  };
};

const receiveTicket = ticket => {
  return {
    type: RECEIVE_TICKET,
    ticket
  };
};

export const createTicket = ticket => dispatch => (
  APIUtil.createTicket(ticket).then(ticket => {
    dispatch(receiveTicket(ticket));
    return ticket;
  }), err => (
    dispatch(receiveErrors(err.responseJSON))
));
