export const addBookmark = bookmark => {
  return (
    $.ajax({
      method: 'POST',
      url: '/api/bookmarks',
      data: { bookmark }
    })
  );
}

export const removeBookmark = eventId => (
  $.ajax({
    method: 'DELETE',
    url: `/api/bookmarks/${eventId}`
  })
);
