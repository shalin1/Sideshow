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

export const createEvent = event => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/events',
      processData: false,
      contentType: false,
      data: event
    })
  );
};

export const updateEvent = event => {
  return (
    $.ajax({
      method: 'PATCH',
      url: `api/events/${event.get('event[id]')}`,
      processData: false,
      contentType: false,
      data: event
    })
  );
};

export const deleteEvent = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/events/${id}`,
  })
);
