import { connect } from 'react-redux';
import { userExists } from '../../util/session_api_util';
import SignInForm from './signin_form';

const mapStateToProps = (state, ownProps) => ({
  ui: state.ui
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userExists: email => dispatch(userExists(email))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignInForm);
