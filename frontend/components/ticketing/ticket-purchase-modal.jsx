import React from 'react';
import Modal from 'react-modal';


<Modal
  isOpen={this.state.modalIsOpen}
  contentLabel="Modal"
  style={modalStyle}
  onRequestClose={this.closeModal}
  shouldCloseOnOverlayClick={true}>
  <div className="modal-tickets-header">
    <h1 className="modal-tickets-header-content">Select Tickets</h1>
  </div>
  <button className="events-show-modal-close" onClick={this.closeModal}>x</button>
  {this.renderTickets()}
  <button onClick={this.purchaseTickets} className="ticket-checkout-button"> CHECKOUT </button>
</Modal>
