export const createTicket = ticket => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/tickets/',
      data: ticket
    })
  );
};

export const showTicket = id => {
  return (
    $.ajax({
      method: "GET",
      url: `api/ticket/${id}`
    })
  );
}
