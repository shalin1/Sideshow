import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { logout, fetchEvents } from '../../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = state => ({
	currentUser: state.session.currentUser,
	sessionModalActive: state.ui.sessionModalActive
});

const mapDispatchToProps = dispatch => ({
	logout: () => dispatch(logout()),
	fetchEvents: () => dispatch(fetchEvents())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
