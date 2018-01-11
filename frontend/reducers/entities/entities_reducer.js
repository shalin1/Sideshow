import { combineReducers } from 'redux';

import events from './events_reducer';
import tickets from './tickets_reducer';

const entitiesReducer = combineReducers({
  events,
  tickets
});

export default entitiesReducer;
