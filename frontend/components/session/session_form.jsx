import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "shalin.scupham@gmail.com",
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
    this.props.login({user});
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
          <h4 className="user-prompt-medium">Welcome back</h4>
          <h6 className="user-prompt-small">Please enter your password to log in.</h6>
        </section>
        <label className="eds-primary">Email address</label>
        <div>
          <span>
            <p className="email">{this.state.email}</p>
            <Link to="/signin">PenIcon</Link>
          </span>
        </div>
        <form onSubmit={this.handleSubmit}>
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
