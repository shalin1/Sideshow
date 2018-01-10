import merge from 'lodash/merge';

import {RECEIVE_EVENT_ERRORS} from '../actions/event_actions';
import { RESET_ERRORS } from '../actions/error_actions';

const defaultState = {title: [], description: [], venue_name: [], venue_address: [],
ticket_price: [], tickets_avilable: [], event_start: [], event_end: [], imageUrl: []};

export default (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENT_ERRORS:
      return merge({}, state, action.errors);
    case RESET_ERRORS:
      return defaultState;
    default:
      return state;
  }
};
