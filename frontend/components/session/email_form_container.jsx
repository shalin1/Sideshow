import { connect } from 'react-redux';
// import {logInOrSignUp} from '';
import EmailForm from './email_form';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.session.currentUser),
  errors: state.errors.session,
});

const mapDispatchToProps = (dispatch, ownProps) => {
  // return {
  //   // logInOrSignUp: user => dispatch(logInOrSignUp(user)),
  // };
};

export default connect(
  mapStateToProps,
  null
)(EmailForm);
