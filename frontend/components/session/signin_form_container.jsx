import { connect } from 'react-redux';
import { userExists, login } from '../../actions/session_actions';
import SignInForm from './signin_form';

const mapStateToProps = (state, ownProps) => ({
  ui: state.ui,
  errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userExists: email => dispatch(userExists(email)),
    login: user => dispatch(login(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
