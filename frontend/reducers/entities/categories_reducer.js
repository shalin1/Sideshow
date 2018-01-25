import { RECEIVE_CATEGORIES, RECEIVE_CATEGORY } from '../../actions/category_actions';
import merge from 'lodash/merge';

const defaultState = {};

const categoriesReducer = (oldState = defaultState, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CATEGORIES:
      return merge({}, action.categories)
      break;
    case RECEIVE_CATEGORY:
      const newCategory = {[action.category.id]:action.category};
      return merge({}, oldState, newCategory);
    default:
      return oldState;

  }
};

export default categoriesReducer
