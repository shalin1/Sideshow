import { connect } from 'react-redux';
import { userExists } from '../../util/session_api_util';
import EmailForm from './email_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    userExists: email => dispatch(userExists(email))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmailForm);
