import { connect } from 'react-redux';
import { login, signup, logout, showModal, hideModal } from '../../actions/session_actions';
import SessionFormModal from './session_form_modal';
import { resetErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
  validEmail: state.ui.validEmail,
  currentUser: state.session.currentUser,
  sessionModalActive: state.ui.sessionModalActive
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
  } else {
    formType = 'Sign In';
    action = null;
  }
  return {
    action,
    formType,
    resetErrors: () => dispatch(resetErrors()),
    showModal: () => dispatch(showModal()),
    hideModal: () => dispatch(hideModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionFormModal);
