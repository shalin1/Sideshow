import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.email,
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm({user});
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
      <div className="login-form-container">
        <h1>{(this.props.formType === "signin") ? 'Sign In!' : 'Sign Up!'}</h1>
        <ul>{this.renderErrors()}</ul>
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
            <input
              type='text'
              onChange={this.update('email')}
              value={this.state.username}
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



export default withRouter(SessionForm);


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
