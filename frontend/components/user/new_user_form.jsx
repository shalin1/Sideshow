import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class NewUserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "test@foo.bar",
      password: "",
      first_name: "",
      last_name: "",
      emails_opt_in: true
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.signup({user});
  }

  update(attribute) {
    return (e) => {
      this.setState({[attribute]: e.target.value});
    };
  }

  renderErrors() {
    debugger
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
      <div className="login-form-container">
        <ul>{this.renderErrors()}</ul>
          <section className="login-modal-CTA">
            <div>User Avatar Here</div>
            <h4 className="user-prompt-medium">Welcome</h4>
            <h6 className="user-prompt-small">Create an account.</h6>
          </section>
          <section>
            <label>Email address</label>
            <p className="email">{this.state.email}</p>
            <span>
              <Link to="/signin">PenIcon</Link>
            </span>
          </section>
          <form onSubmit={this.handleSubmit}>
          <br/>
            <label>First Name</label>
              <input
                type='text'
                onChange={this.update('first_name')}
                value={this.state.first_name}
              />
            <label>Last Name</label>
              <input
                type='text'
                onChange={this.update('last_name')}
                value={this.state.last_name}
              />
            <br/>
            <label>Password</label>
            <input
              type='password'
              onChange={this.update('password')}
              value={this.state.password}
              />

          <br/>
          <br/>
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}



export default NewUserForm;
