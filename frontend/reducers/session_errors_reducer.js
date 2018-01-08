import merge from 'lodash/merge';

import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import { RESET_ERRORS } from '../actions/error_actions';

const defaultState = {password: [], first_name: [], last_name: [], email: []};

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return merge({}, state, action.errors);
    case RECEIVE_CURRENT_USER:
      return defaultState;
    case RESET_ERRORS:
      return defaultState;
    default:
      return state;
  }
};
