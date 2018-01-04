import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    let email;
    if (Boolean(props.validEmail.email)) {
      email = props.validEmail.email;
    } else {
      email = "";
    }
    this.state = {
      email: props.validEmail.email,
      password: "",
      first_name: "",
      last_name: "",
      emails_opt_in: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  componentWillUnmount() {
    this.props.resetErrors();
    this.setState({email: '', password: '',
       first_name: '', last_name: '', emails_opt_in: true});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.action({user});
  }

  update(attribute) {
    return (e) => {
      this.setState({[attribute]: e.target.value});
    };
  }

  renderErrors() {
    return(
      <ul className="login-errors">
        {
          this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))
        }
      </ul>
    );
  }

  renderHeader() {
    if (this.props.formType === 'Login') {
      return (
        <section className="login-modal-CTA">
          <div className="login-icon-container">
            <i className="fa fa-user fa-3x login-icon" aria-hidden="true"></i>
          </div>
          <br/>
          <h3 className="user-prompt-medium">Welcome back</h3>
          <h4 className="user-prompt-small">Please enter your password to log in.</h4>
        </section>
      );
    } else {
      return (
        <section className="login-modal-CTA">
          <div className="login-icon-container">
            <i className="fa fa-user fa-3x login-icon" aria-hidden="true" color="grey"></i>
          </div>
          <h3 className="user-prompt-medium">Welcome</h3>
          <h5 className="user-prompt-small">Create an account.</h5>
        </section>
      );
    }
  }

  signupFormBonusFields() {
    if (this.props.formType === 'Sign Up') {
      return (
        <div className="bonus-fields">
            <label className="session-form-label">First Name</label>

            <div className="session-form-input-box bonus-field">
              <input
                type='text'
                onChange={this.update('first_name')}
                value={this.state.first_name}
                className="session-form-input "/>
            </div>
            <br/>
            <label className="session-form-label">Last Name</label>
            <div className="session-form-input-box bonus-field">
              <input
                type='text'
                onChange={this.update('last_name')}
                value={this.state.last_name}
                className="session-form-input "/>
            </div>
            <br/>
        </div>
      );
    }
  }

  render() {
    return(
      <div className="session-form-container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        {this.renderHeader()}
        <form onSubmit={this.handleSubmit}>
          <label className="session-form-label">
            Email address
            <br/>
              {this.state.email}
              <Link to="/signin">
                <i className="fa fa-pencil edit-icon" aria-hidden="true" />
              </Link>
            </label>
          <br/>
          <br/>
          {this.signupFormBonusFields()}
          <label className="session-form-label">Password</label>
          <div className="session-form-input-box">
            <input
              className="session-form-input"
              type='password'
              onChange={this.update('password')}
              value={this.state.password}
            />
            <br/>
            <br/>
            <button onClick={this.handleSubmit} className="session-action-button">Log In</button>
            <br/>
            {this.renderErrors()}
          </div>
        </form>
      </div>
    );
  }

}



export default withRouter(SessionForm);
