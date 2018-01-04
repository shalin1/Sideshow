import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

const LoggedInUser = (currentUser, logout) => (
  <div className="logged-in-user">
    <i className="fa fa-user avatar-icon" aria-hidden="true"></i>
    <h4 className="nav-text">{currentUser.first_name}</h4>
    <button className="header-button" onClick={logout}>Sign Out</button>
  </div>
);

const SignInUser = () => (
  <Link className="nav-link" to="/signin">Sign In</Link>
);

const UserNav = ({ currentUser, logout }) => (
  currentUser ? LoggedInUser(currentUser, logout) : SignInUser()
);

export default UserNav;
