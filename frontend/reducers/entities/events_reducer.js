import merge from 'lodash/merge';
import { RECEIVE_EVENTS, RECEIVE_EVENT } from '../../actions/event_actions';

const defaultState =
Object.freeze({events: null});

const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_EVENTS:
      return {events: action.events};
    case RECEIVE_EVENT:
      const newEvent = {[action.event.id]:action.event} ;
      return merge( {}, state, newEvent );
    default:
      return state;
  }
};

export default sessionReducer;
