import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // trigger modal
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.email;
    // send to '/login' if a user is associated w email
    // otherwise send to '/signup'
    // pass through email as props
  }

  update(attribute) {
    return (e) => {
      this.setState({[attribute]: e.target.value});
    };
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return(
      <div className="email-form-container">
        <ul className="login-errors">{this.renderErrors()}</ul>
        <section className="login-modal-CTA">
          <div>Logo Here</div>
          <h4 className="user-prompt-medium">Let's get started.</h4>
          <h6 className="user-prompt-small">Enter your email to sign up or log in.</h6>
        </section>
        <form onSubmit={this.handleSubmit}>
          <label>Email address</label>
          <input
            type='text'
            placeholderText="Enter email"
            onChange={this.update('email')}
            value={this.state.username}
          />
          <br/>
          <input
            type="submit"
            value="Get Started"
            className="EmailSubmitForm"
          />
        </form>
        <br/>
        <button onClick="" className="demo-log-in-button">Demo Log In</button>
      </div>
    );
  }

}



export default EmailForm;
