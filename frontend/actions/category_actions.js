import * as APIUtil from '../util/category_api_util';

export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_EVENTS = 'RECEIVE_EVENTS';
export const RECEIVE_CATEGORY_ERRORS = 'RECEIVE_CATEGORY_ERRORS';
import { Route } from 'react-router-dom';

const receiveCategories = categories => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

const receiveCategoryEvents = events => {
  return {
    type: RECEIVE_EVENTS,
    events
  };
};

export const fetchCategories = () => dispatch => (
  APIUtil.fetchCategories().then( categories => (
    dispatch(receiveCategories(categories))
  ))
);

export const fetchCategory = id => dispatch => (
  APIUtil.fetchCategory(id).then( events => (
    dispatch(receiveCategoryEvents(events))
  ))
);
