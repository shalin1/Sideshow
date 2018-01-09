
  import React from 'react';
  import { Link, withRouter } from 'react-router-dom';

  class SessionForm extends React.Component {
    constructor(props) {
      super(props);

      let email = Boolean(props.validEmail) ? props.validEmail : "";

      this.state = {
        email: email,
        password: "",
        first_name: "",
        last_name: "",
        emails_opt_in: true,
      };
      
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      this.nameInput.focus();
    }

    renderErrors(field) {
      return(
        <ul className="form-errors">
          {
            this.props.errors[field].map((error, i) => (
              <li key={`error-${i}`} className="form-error-message">
                {error}
              </li>
            ))
          }
        </ul>
      );
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
        this.props.resetErrors();
      };
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
            <div className="login-icon-container {}">
              <i className="fa fa-user fa-3x login-icon" aria-hidden="true" color="grey"></i>
            </div>
            <h3 className="user-prompt-medium">Welcome</h3>
            <h5 className="form-label">Create an account.</h5>
          </section>
        );
      }
    }

    signupFormBonusFields() {
      if (this.props.formType === 'Sign Up') {
        return (
            <div>
            <label className="form-label">First Name
            <div className="form-input-box bonus-field">
              <input
                type='text'
                onChange={this.update('first_name')}
                value={this.state.first_name}
                className="form-input "
              />
                {this.renderErrors("first_name")}
            </div>
            </label>
            <br/>
            <label className="form-label">Last Name
              <div className="form-input-box bonus-field">
                <input
                  type='text'
                  onChange={this.update('last_name')}
                  value={this.state.last_name}
                  className="form-input "
                />

                  {this.renderErrors("last_name")}
              </div>
            </label>
            <br/>
          </div>
        );
      }
    }

    render() {
      const password = (field) => {

      };
      return(
        <div className="session-form-container">
          {this.renderHeader()}
          <form onSubmit={this.handleSubmit}>
            <label className="form-label">
              Email address
              <br/>
                {this.state.email}
                <Link to="/signin">
                  <i className="fa fa-pencil edit-icon" aria-hidden="true" />
                </Link>
              </label>
            <br/>
            <br/>
            <label className="form-label">Password
              <div className="form-input-box">
                <input
                  ref={(input) => { this.nameInput = input; }}
                  className="form-input"
                  type='password'
                  onChange={this.update('password')}
                  value={this.state.password}
                />
                {this.renderErrors("password")}
              </div>
              </label>
                <br/>
                {this.signupFormBonusFields()}

              <button onClick={this.handleSubmit} className="session-action-button">Log In</button>
          </form>
        </div>
      );
    }

  }



  export default withRouter(SessionForm);
