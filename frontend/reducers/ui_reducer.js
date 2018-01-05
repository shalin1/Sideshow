import { RECEIVE_VALID_EMAIL, SHOW_MODAL } from '../actions/session_actions';
import merge from 'lodash/merge';

export default (state = {
  validEmail: {email: "", exist: false},
  sessionModalActive: false
  }, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_VALID_EMAIL:
      const validEmail = action.validEmail;
      return merge({}, {validEmail});
    case SHOW_MODAL:
      return merge({}, state, {sessionModalActive: true});
    default:
      return state;
  }
};
