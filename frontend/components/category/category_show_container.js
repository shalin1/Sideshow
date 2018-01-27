import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchCategory, fetchCategories } from '../../actions/category_actions';
import { addBookmark, removeBookmark } from '../../actions/session_actions';
import { pageIsLoading, pageFinishedLoading } from '../../actions/loading_toggle_actions';
import CategoryShow from './category_show';

const mapStateToProps = (state, { match }) => {
  const categories = Object.values(state.entities.categories);
  const currentUser = state.session.currentUser;
  const isLoading = state.ui.loading;
  return {
    categories,
    currentUser,
    isLoading
  }
};

const mapDispatchToProps = dispatch => ({
  fetchCategory: categoryId => dispatch(fetchCategory(categoryId)),
  fetchCategories: () => dispatch(fetchCategory()),
  addBookmark: bookmark => dispatch(addBookmark(bookmark)),
  removeBookmark: eventId => dispatch(removeBookmark(eventId)),
  pageIsLoading: () => dispatch(pageIsLoading()),
  pageFinishedLoading: () => dispatch(pageFinishedLoading()),
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(CategoryShow);
