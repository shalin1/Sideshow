import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {signup, login, logout} from './actions/session_actions';
import {userExists} from './util/session_api_util';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

// TESTING START
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.userExists = userExists
// TESTING END

  Modal.setAppElement(document.body);
  ReactDOM.render(<Root store={ store } />, root);

});
