import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
}

  handleSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    this.props.userExists({email});
}


  componentDidMount() {
    this.nameInput.focus();
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


  update(attribute) {
    return (e) => {
      this.setState({[attribute]: e.target.value});
    };
  }

  validate(email) {
    return {
      email: (email.length > 0 && email.includes("@"))
    };
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors.session.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    const { email } = this.state;
    const buttonDisabled = (email.length <= 1 );
    const errors = this.validate(this.state.email);

    return(
      <div className="session-form-container">
        <section className="login-modal-CTA">
          <div className="login-icon-container">
            <i className="fa fa-bullhorn fa-2x fa-spin login-icon" aria-hidden="true" />
          </div>
          <br/>
          <h3 className="user-prompt-medium">Let's get started</h3>
          <h4 className="user-prompt-small">Enter your email to sign up or log in.</h4>
        </section>
        <form onSubmit={this.handleSubmit}>
          <label className="form-label">Email address</label>
          <div className="form-input-box">
            <ul className="login-errors">
            </ul>
            <input
              ref={(input) => { this.nameInput = input; }}
              className="form-input"
              type='text'
              placeholder="Enter email"
              onChange={this.update('email')}
              value={this.state.email}
            />
            <br/>
            <button
              disabled={buttonDisabled}
              className="session-action-button"
            >
              Get Started
            </button>
            <br/>
            <button
              onClick={this.handleDemoLogin}
              className="session-action-button demo-login"
            >
              Demo Log In
            </button>
          </div>
        </form>
      </div>
    );
  }

}



export default withRouter(SignInForm);
