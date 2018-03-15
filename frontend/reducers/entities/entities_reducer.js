import { combineReducers } from 'redux';

import events from './events_reducer';
import tickets from './tickets_reducer';
import categories from './categories_reducer';

const entitiesReducer = combineReducers({
	events,
	tickets,
	categories
});

export default entitiesReducer;
