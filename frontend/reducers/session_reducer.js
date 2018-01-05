import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';

const defaultState = Object.freeze({currentUser: null});

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {currentUser: action.user};
    default:
      return state;
  }
};
