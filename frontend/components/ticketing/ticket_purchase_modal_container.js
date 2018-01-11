import { connect } from 'react-redux';
import { showTicketingModal, hideTicketingModal } from '../../actions/modal_actions';
import TicketPurchaseModal from './ticket_purchase_modal';
import { resetErrors } from '../../actions/error_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.ticketing,
  ticketModalActive: state.ui.ticketModalActive,
  currentUser: state.session.currentUser,
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
