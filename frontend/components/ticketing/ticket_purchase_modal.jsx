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
            className="tickets-modal-close"
            onClick={this.handleClose}
          >
            x
          </button>
          <section className="tickets-modal-header">
            <h1 className="tickets-modal-header-content">Register</h1>
          </section>
          <button
            onClick={this.purchaseTickets} className="ticket-modal-checkout-button"
          >
            CHECKOUT
          </button>
        </div>
      </div>
    );
  }
}

export default TicketPurchaseModal;
