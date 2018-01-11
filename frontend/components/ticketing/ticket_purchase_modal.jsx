import React from 'react';

class TicketPurchaseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props;
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.props.hideTicketingModal();
  }

  render() {
    return (
      <div className="tickets-modal-overlay" onClick={this.handleClose}>
        <div className="tickets-modal-container">
          <button
            className="events-show-modal-close"
            onClick={this.handleClose}
          >
            x
          </button>
          <section className="modal-tickets-header">
            <h1 className="modal-tickets-header-content">Select Tickets</h1>
          </section>
          <button
            onClick={this.purchaseTickets} className="ticket-checkout-button"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    );
  }
}

export default TicketPurchaseModal;
