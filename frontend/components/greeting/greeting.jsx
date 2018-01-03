import React from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';

const personalGreeting = (currentUser, logout) => (
  <div>
    <span className="placeholder"><i class="fa fa-user" aria-hidden="true"></i>
    </span>
    <span>{currentUser.first_name}</span>
    <button className="header-button" onClick={logout}>Sign Out</button>
  </div>
);

const sessionLink = () => (
  <div>
    <Link to="/signin">Sign In</Link>
  </div>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : sessionLink()
);

export default Greeting;
