import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
    this.props.processForm({user})
  }

  update(attribute) {
    return (e) => {
      this.setState({[attribute]: e.target.value})
    };
  }

  renderErrors() {
    // debugger
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
    // debugger
    return(
      <div className="login-form-container">
        <h1>{(this.props.formType === "signin") ? 'Sign In!' : 'Sign Up!'}</h1>
        <ul>{this.renderErrors()}</ul>
        <form onSubmit={this.handleSubmit}>
          <label>Username</label>
            <input
              type='text'
              onChange={this.update('username')}
              value={this.state.username}
            />
          <br/>
          <label>Password</label>
            <input
              type='password'
              onChange={this.update('password')}
              value={this.state.password}
            />
            <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

}



export default withRouter(SessionForm);
