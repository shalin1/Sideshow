import React from 'react';
class TicketPurchaseModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tix_quantity: 1
    };
    this.handleClose = this.handleClose.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    const ticket = {
      ticket: {
        ticket_holder_id: this.props.currentUser.id,
        event_id: this.props.event.id,
        ticket_price: (this.props.event.ticket_price * 1.1347).toFixed(2),
        ticket_quantity: this.state.ticket_quantity
      }
    };
    this.props.createTicket(ticket);
    this.handleClose();
  }

  handleChange(event) {
     this.setState({ticket_quantity: event.target.value});
   }

  handleClose() {
    this.props.hideTicketingModal();
  }

  render() {
    return (
      <div className="tickets-modal-overlay">
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

          <section className="tickets-modal-box">
            <div>
              <j3 className="tickets-modal-input-text">
                ${this.props.event.ticket_price}
                <br/>
                + ${(this.props.event.ticket_price * 0.1347).toFixed(2)} FEE
              </j3>
            </div>
            <div className="tickets-modal-form-input-container">
              <form>
                <select
                  className="tickets-modal-form-input-select"
                  value={this.state.ticket_quantity} onChange={this.handleChange}>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
              </form>
            </div>

          </section>

          <section className="tickets-modal-footer">
            <div className="tickets-modal-labels">
              <span>Qty:{this.state.tix_quantity}</span>
              <span>USD ${(this.props.event.ticket_price * this.state.tix_quantity * 1.1347).toFixed(2)}</span>
            </div>
            <button onClick={this.handleSubmit} value="TEST">
              CHECKOUT
            </button>

          </section>
        </div>
      </div>
    );
  }
}

export default TicketPurchaseModal;
