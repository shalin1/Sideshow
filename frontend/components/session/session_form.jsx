import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    let email;
    if (props.validEmail.email) {
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
      <ul>
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
          <div>
            <i className="fa fa-user fa-3x" aria-hidden="true" color="grey"></i>
          </div>
          <h4 className="user-prompt-medium">Welcome back</h4>
          <h6 className="user-prompt-small">Please enter your password to log in.</h6>
        </section>
      );
    } else {
      return (
        <section className="login-modal-CTA">
          <div>
            <i className="fa fa-user fa-3x" aria-hidden="true" color="grey"></i>
          </div>
          <h4 className="user-prompt-medium">Welcome</h4>
          <h6 className="user-prompt-small">Create an account.</h6>
        </section>
      );
    }
  }

  signupFormBonusFields() {
    if (this.props.formType === 'Sign Up') {
      debugger
      return (
        <div className="additional-info">
          <label>First Name
            <input
              type='text'
              onChange={this.update('first_name')}
              value={this.state.first_name}
              className="form-login-info"/>
          </label>
          <label>Last Name
            <input
              type='text'
              onChange={this.update('last_name')}
              value={this.state.last_name}
              className="form-login-info"/>
          </label>
        </div>
      );
    }
  }

  render() {
    return(
      <div className="session-form-container">
        {this.renderErrors()}
        {this.renderHeader()}
        <label className="eds-primary">Email address</label>
        <div>
          <span>
            <p className="email">
              {this.state.email}
              <Link to="/signin">
                <i className="fa fa-pencil" aria-hidden="true" />
              </Link>
            </p>
          </span>
        </div>
        <form onSubmit={this.handleSubmit}>
          {this.signupFormBonusFields()}
          <label>Password</label>
          <input
            type='password'
            onChange={this.update('password')}
            value={this.state.password}
          />
          <br/>
            <input type="submit" value="Log In" />
        </form>
      </div>
    );
  }

}



export default withRouter(SessionForm);
