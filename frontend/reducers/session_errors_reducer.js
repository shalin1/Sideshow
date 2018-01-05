import merge from 'lodash/merge';

import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import { RESET_ERRORS } from '../actions/error_actions';

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;
    case RECEIVE_CURRENT_USER:
      return [];
    case RESET_ERRORS:
      return [];
    default:
      return state;
  }
};
