import { connect } from 'react-redux';
import { signup} from '../../actions/session_actions';
import NewUserForm from './new_user_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  email: state.email
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    signup: user => dispatch(signup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewUserForm);
