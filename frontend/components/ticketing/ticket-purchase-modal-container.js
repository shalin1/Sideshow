import { connect } from 'react-redux';
import { showTicketingModal, hideTicketingModal } from '../../actions/session_actions';
import TicketPurchaseModal from './ticket_purchase_modal';
import { resetErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.ticketing,
  sessionModalActive: state.ui.sessionModalActive,
  currentUser: state.session.currentUser,
  currentEventId: ownProps.match.params
});

const mapDispatchToProps = dispatch => {
  return {
    hideTicketingModal: () => dispatch(hideTicketingModal())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketPurchaseModal);
