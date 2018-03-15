import * as APIUtil from '../util/ticket_api_util';

export const RECEIVE_TICKET = 'RECEIVE_TICKET';
export const RECEIVE_TICKETS = 'RECEIVE_TICKETS';
export const RECEIVE_TICKET_ERRORS = 'RECEIVE_TICKET_ERRORS';
export const REMOVE_TICKET = 'REMOVE_TICKET';

const receiveErrors = errors => {
	return {
		type: RECEIVE_TICKET_ERRORS,
		errors
	};
};

const removeTicket = ticket => {
	return {
		type: REMOVE_TICKET,
		ticket
	};
};

const receiveTicket = ticket => {
	return {
		type: RECEIVE_TICKET,
		ticket
	};
};

const receiveTickets = tickets => {
	return {
		type: RECEIVE_TICKETS,
		tickets
	};
};

export const fetchTickets = () => dispatch =>
	APIUtil.fetchTickets().then(tickets => {
		dispatch(receiveTickets(tickets));
		return tickets;
	});

export const createTicket = ticket => dispatch => (
	APIUtil.createTicket(ticket).then(ticket => {
		dispatch(receiveTicket(ticket));
		return ticket;
	}),
	err => dispatch(receiveErrors(err.responseJSON))
);

export const deleteTicket = ticket => dispatch => {
	return APIUtil.deleteTicket(ticket).then(() =>
		dispatch(removeTicket(ticket))
	);
};
