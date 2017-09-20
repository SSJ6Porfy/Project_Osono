//React
import React from 'react';
import ReactDOM from 'react-dom';
//Components
import Root from './components/root';
import configureStore from './store/store';

import { login, signup, logout } from "./util/session_api_util"


document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Osono</h1>, root);

  window.login = login;
  window.signup = signup;
  window.logout = logout;
});




let store;
if (window.currentUser) {
  const preloadedState = { session: { currentUser: window.currentUser } };
  store = configureStore(preloadedState);
  delete window.currentUser;
} else {
  store = configureStore();
}
