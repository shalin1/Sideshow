import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCategory, fetchCategories } from '../../actions/category_actions';
import { addBookmark, removeBookmark } from '../../actions/bookmark_actions';
import CategoryShow from './category_show';

const mapStateToProps = (state, { match }) => {
  debugger
  const categoryId = parseInt(match.params.id);
  const category = state.entities.categories[categoryId];
  const currentUser = state.session.currentUser;
  return {
    categoryId,
    category,
    errors: state.errors.category
  }
};

const mapDispatchToProps = dispatch => ({
  fetchCategory: categoryId => dispatch(fetchCategory(categoryId)),
  addBookmark: bookmark => dispatch(addBookmark(bookmark)),
  removeBookmark: eventId => dispatch(removeBookmark(eventId)),
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(CategoryShow);
