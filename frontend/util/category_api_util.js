export const fetchCategories = () => (
  $.ajax({
    method: 'GET',
    url: 'api/categories'
  })
);

export const fetchCategory = () => {
  debugger
  return (
    $.ajax({
      method: 'GET',
      url: `api/categories/${id}`
    })
  );
}

export const createCategory = category => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/categories/',
      data: { category }
    })
  );
}

export const updateCategory = category => {
  return (
    $.ajax({
      method: 'POST',
      url: 'api/categories/',
      data: { category }
    })
  );
}

export const removeCategory = eventId => {
  return(
    $.ajax({
      method: 'DELETE',
      url: `api/categories/${categoryId}`
    })
  );
}
