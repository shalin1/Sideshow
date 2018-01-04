import { connect } from 'react-redux';
import { logout, toggleModal } from '../../actions/session_actions';
import UserNav from './user_nav';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  toggleModal: () => dispatch(toggleModal())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserNav);
