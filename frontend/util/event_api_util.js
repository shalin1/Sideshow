export const fetchEvents = () => (
  $.ajax({
    method: 'GET',
    url: 'api/events'
  })
);

export const fetchEvent = id => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  })
);

export const createEvent = event => (
  $.ajax({
    method: 'POST',
    url: 'api/events',
    processData: false,
    contentType: false,
    data: event
  })
);

export const updateEvent = event => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: {event}
  })
);

export const deleteEvent = event => (
  $.ajax({
    method: 'DELETE',
    url: 'api/events',
    data: event
  })
);
