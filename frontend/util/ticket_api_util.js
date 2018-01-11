export const createTicket = ticket => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/tickets/',
      data: ticket
    })
  );
};

export const fetchTickets = () => {
  return (
    $.ajax({
      method: "GET",
      url: `api/tickets`
    })
  );
};

export const showTicket = id => {
  return (
    $.ajax({
      method: "GET",
      url: `api/tickets/${id}`
    })
  );
};

export const deleteTicket = ticket => {
  return (
    $.ajax({
      method: "DELETE",
      url: `api/tickets/${ticket.id}`
    })
  );
};
