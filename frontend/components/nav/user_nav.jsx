import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

const LoggedInUser = (currentUser, logout) => (
  <div className="nav-right">
    <div className="nav-link">
      <i className="fa fa-user avatar-icon" aria-hidden="true" />
      <span className="font-nav-link">{currentUser.first_name}</span>
    </div>
    <button onClick={logout}>
      <div className="nav-link font-nav-link">
      Sign Out
      </div>
    </button>
  </div>
);

const SignInUser = () => (
  <Link to="/signin">
    <div className="nav-link font-nav-link">
      Sign In
    </div>
  </Link>
);

const UserNav = ({ currentUser, logout }) => (
  currentUser ? LoggedInUser(currentUser, logout) : SignInUser()
);

export default UserNav;
