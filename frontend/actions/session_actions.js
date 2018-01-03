import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const RECEIVE_VALID_EMAIL = 'RECEIVE_VALID_EMAIL';

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

const receiveValidEmail = validEmail => ({
  type: RECEIVE_VALID_EMAIL,
  validEmail
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(receiveCurrentUser(null))
  ))
);

export const userExists = email => dispatch => (
  APIUtil.userExists(email)
  .then(validEmail => dispatch(receiveValidEmail(validEmail)))
);

export const demoLogin = (demoUser) => dispatch => (
  APIUtil.login(demoUser)
  .then(user => dispatch(receiveCurrentUser(user)))
);
