import * as APIUtil from '../util/category_api_util';
import * as membershipsAPIUtil from '../util/category_memberships_api_util';
export const RECEIVE_CATEGORIES = 'RECEIVE_CATEGORIES';
export const RECEIVE_CATEGORY = 'RECEIVE_CATEGORY';
export const RECEIVE_CATEGORY_ERRORS = 'RECEIVE_CATEGORY_ERRORS';
import { Route } from 'react-router-dom';

const receiveCategories = categories => {
  return {
    type: RECEIVE_CATEGORIES,
    categories
  };
};

const receiveCategory = category => {
  return {
    type: RECEIVE_CATEGORY,
    category
  };
};

export const fetchCategories = () => dispatch => (
  APIUtil.fetchCategories().then( categories => (
    dispatch(receiveCategories(categories))
  ))
);

export const fetchCategory = id => dispatch => (
  APIUtil.fetchCategory(id).then( category => (
    dispatch(receiveCategory(category))
  ))
);


export const createCategoryMembership = categoryMemberhip => dispatch => (
  APIUtil.createCategoryMembership(categoryMemberhip)
  .then(categoryMembership =>  dispatch(fetchCategories(categoryMembership)),
   errors => dispatch(receiveErrors(errors.responseJSON)))
);

export const removeCategoryMembership = eventId => dispatch => (
  APIUtil.removeMembership(eventId)
  .then(categoryMembership =>  dispatch(fetchCategories(categoryMembership)),
   errors => dispatch(receiveErrors(errors.responseJSON)))
);
