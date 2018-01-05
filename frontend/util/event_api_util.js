export const showEvent = id => (
  $.ajax({
    method: 'GET',
    url: `api/events/${id}`
  })
);

export const eventIndex = () => (
  $.ajax({
    method: 'GET',
    url: 'api/events'
  })
);

export const newEvent = event => (
  $.ajax({
    method: 'POST',
    url: 'api/events',
    data: event
  })
);

export const editEvent = event => (
  $.ajax({
    method: 'PATCH',
    url: `api/events/${event.id}`,
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
