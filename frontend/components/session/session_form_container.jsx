import { connect } from 'react-redux';
import { login, signup, logout } from '../../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  validEmail: state.ui.validEmail,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => {
  let action;
  let formType;
  if (ownProps.match.path === '/signin/login') {
    action = user => dispatch(login(user));
    formType = 'Login';
  } else if (ownProps.match.path === '/signin/signup') {
    action = user => dispatch(signup(user));
    formType = 'Sign Up';
  }
  return {
    action,
    formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
