import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loginRedirect = this.loginRedirect.bind(this);
    this.signupRedirect = this.signupRedirect.bind(this);
  }

  componentDidMount() {
    // trigger modal
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    this.props.userExists({email});
    // ( this.props.emailCheck({email}) ) ? this.loginRedirect : this.signupRedirect;
  }


  loginRedirect(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: `/signin/login`,
      state: { email: this.state }
    });
  }

  signupRedirect(e) {
    e.preventDefault();
    this.props.history.push({
      pathname: `/signin/signup`,
      state: { email: this.state }
    });
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
          <div><i className="fa fa-bullhorn fa-spin fa-3x" aria-hidden="true"></i>
          </div>
          <h4 className="user-prompt-medium">Let's get started.</h4>
          <h6 className="user-prompt-small">Enter your email to sign up or log in.</h6>
        </section>
        <form onSubmit={this.handleSubmit}>
          <label>Email address</label>
          <input
            type='text'
            placeholdertext="Enter email"
            onChange={this.update('email')}
            value={this.state.username}
          />
          <br/>
          <button onClick={this.handleSubmit} className="action-button">Get Started</button>
        </form>
        <br/>
        <button onClick={this.demoLogin} className="demo-log-in-button">Demo Log In</button>
      </div>
    );
  }

}



export default withRouter(SignInForm);
