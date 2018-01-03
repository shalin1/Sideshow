import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class EmailForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    // trigger modal
  }

  handleSubmit(e) {
    e.preventDefault();
    const email = this.email;
    // send to '/login' if a user is associated w email
    // otherwise send to '/signup'
    // pass through email as props
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
        <ul>{this.renderErrors()}</ul>
        <section>
          <div>Logo Here</div>
          <div className="userprompt-medium">Let's get started.</div>
          <div className="userprompt-small">Enter your email to sign up or log in.</div>
        </section>
        <form onSubmit={this.handleSubmit}>
          <label>Email address</label>
            <input
              type='text'
              placeholderText="Enter email"
              onChange={this.update('email')}
              value={this.state.username}
            />
          <br/>
            <input type="submit" value="Get Started" class="EmailSubmitForm" />
        </form>
      </div>
    );
  }

}



export default EmailForm;
