import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
    this.loginRedirect = this.loginRedirect.bind(this);
    this.signupRedirect = this.signupRedirect.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    this.props.userExists({email});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.ui.validEmail.exist) {
      this.props.history.push('/signin/login');
    } else {
      this.props.history.push('/signin/signup');
    }
  }

  handleDemoLogin(e){
    e.preventDefault();
    const demoUser = {user: {email:"demo@gmail.com", password:"password"}};
    this.props.login(demoUser);
    this.props.history.push('/');
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
      <div className="signin-form-container">
        <ul className="login-errors">{this.renderErrors}</ul>
        <section className="login-modal-CTA">
          <div className="login-icon">
            <i className="fa fa-bullhorn fa-spin fa-3x" aria-hidden="true" />
          </div>

          <h3 className="user-prompt-medium">Let's get started</h3>
          <h4 className="user-prompt-small">Enter your email to sign up or log in.</h4>
        </section>
        <form onSubmit={this.handleSubmit}>
          <label className="auth-label">Email address</label>
          <div className="modal-input-box"><input
              className="modal-input"
              type='text'
              placeholder="Enter email"
              onChange={this.update('email')}
              value={this.state.email}
            />
          </div>
          <br/>
          <button onClick={this.handleSubmit} className="action-button">Get Started</button>
        </form>
        <br/>
        <button onClick={this.handleDemoLogin} className="demo-log-in-button">Demo Log In</button>
      </div>
    );
  }

}



export default withRouter(SignInForm);
