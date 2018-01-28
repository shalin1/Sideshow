import { RECEIVE_VALID_EMAIL, SHOW_MODAL } from '../actions/session_actions';
import { SHOW_TICKETING_MODAL, HIDE_TICKETING_MODAL } from '../actions/modal_actions.js';
import { PAGE_IS_LOADING, PAGE_FINISHED_LOADING } from '../actions/loading_toggle_actions';
import filters from './filters_reducer';
import merge from 'lodash/merge';

const defaultState = {
  validEmail: {email: "", exist: false},
  sessionModalActive: false,
  ticketingModalActive: false,
  loading: true,
  filters: {}
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
      return merge({}, oldState, {ticketingModalActive: false});
    case PAGE_FINISHED_LOADING:
      return merge({}, oldState, {loading: false});
    case PAGE_IS_LOADING:
      return merge({}, oldState, {loading: true});
    default:
      return oldState;
  }
};
