import React, { Component } from 'react';
import { combineForms } from 'react-redux-form';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Login, SignUp, initialLogin, initialSignUp } from './Forms.js'
import Navbar from './Navbar.js';
import './App.css';

const store = createStore(combineForms({
  login: initialLogin,
  signUp: initialSignUp,
}));

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
