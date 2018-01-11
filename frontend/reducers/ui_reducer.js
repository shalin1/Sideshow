import { RECEIVE_VALID_EMAIL, SHOW_MODAL } from '../actions/session_actions';
import { SHOW_TICKETING_MODAL, HIDE_TICKETING_MODAL } from '../actions/modal_actions.js';
import merge from 'lodash/merge';

const defaultState = {
  validEmail: {email: "", exist: false},
  sessionModalActive: false,
  ticketingModalActive: false
};

export default (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_VALID_EMAIL:
      const validEmail = action.validEmail;
      return merge({}, {validEmail});
    case SHOW_MODAL:
      return merge({}, oldState, {sessionModalActive: true});
    case SHOW_TICKETING_MODAL:
      return merge({}, oldState, {ticketingModalActive: true});
    case HIDE_TICKETING_MODAL:
      return merge({}, oldState, {ticketingModalActive: true});
    default:
      return oldState;
  }
};
