export const signup = user => (
  $.ajax({
    method: 'POST',
    url: 'api/user',
    data: user
  })
);

export const login = user => (
  $.ajax({
    method: 'POST',
    url: 'api/session',
    data: user
  })
);

export const logout = user => (
  $.ajax({
    method: 'delete',
    url: 'api/session',
    data: user
  })
);

export const userExists = email => (
  $.ajax({
    method: 'GET',
    url: `/api/email/`,
    data: email
  })
);
