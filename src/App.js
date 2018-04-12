import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import store from './store.js';
import Navbar from './Navbar.jsx';
import Login from './forms/Login.jsx';
import SignUp from './forms/SignUp.jsx';
import ForgotPassword from './forms/ForgotPassword.jsx';
import ResetPassword from './forms/ResetPassword.jsx';
import './App.css';

// TODO determine if we can just wrap the Navbar in the Router instead of the entire App
class App extends Component {
  render() {
    return (
      <Provider store={ store } >
        <Router>
          <div className="App">
            <Navbar />
            <Route path="/login" component={ Login } />
            <Route path="/sign-up" component={ SignUp } />
            <Route path='/forgot-pw' component={ ForgotPassword } />
            <Route path='/reset-pw' component={ ResetPassword } />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
