import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

const LoggedInUser = (currentUser, logout) => (
  <div className="nav-right">
    <span className="nav-link-container">
      <i className="fa fa-user avatar-icon nav-link" aria-hidden="true" />
      <span className="nav-link">{currentUser.first_name}</span>
    </span>
    <span className="nav-link-container">
      <button onClick={logout} className='session-link'>Sign Out</button>
    </span>
  </div>
);

const SignInUser = () => (
  <span className="nav-link-container">
    <Link className="session-link" to="/signin">Sign In</Link>
  </span>
);

const UserNav = ({ currentUser, logout }) => (
  currentUser ? LoggedInUser(currentUser, logout) : SignInUser()
);

export default UserNav;
