import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './forms/Login.js';
import SignUp from './forms/SignUp.js';
import Navbar from './Navbar.js';
import store from './store.js';
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
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
