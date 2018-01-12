import { connect } from 'react-redux';
import { showTicketingModal, hideTicketingModal } from '../../actions/modal_actions';
import TicketPurchaseModal from './ticket_purchase_modal';
import { resetErrors } from '../../actions/error_actions';
import { withRouter } from 'react-router-dom';
import { createTicket } from '../../actions/ticket_actions';

const mapStateToProps = (state) => {
  return {
    ticketModalActive: state.ui.ticketModalActive,
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {

  return {
    hideTicketingModal: () => dispatch(hideTicketingModal()),
    createTicket: (ticket) => dispatch(createTicket(ticket))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(TicketPurchaseModal));
