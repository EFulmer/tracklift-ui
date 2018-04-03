import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { combineForms } from 'react-redux-form';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { Login, SignUp, initialLogin, initialSignUp } from './Forms.js'
import './App.css';

const store = createStore(combineForms({
  login: initialLogin,
  signUp: initialSignUp,
}));


class NavbarItems extends Component {
  render() {
    if (this.props.loggedIn) {
      return (
        <Nav>
          <LinkContainer eventKey={1} to="#">
            Add Workout
          </LinkContainer>
          <LinkContainer eventKey={2} to="#">
            Workout Log
          </LinkContainer>
        </Nav>
      );
    }
    else {
      return (
        <Nav>
          <LinkContainer eventKey={1} to="/login">
            <NavItem>
              Log In
            </NavItem>
          </LinkContainer>
          <LinkContainer eventKey={2} to="/sign-up">
            <NavItem>
              Sign Up
            </NavItem>
          </LinkContainer>
        </Nav>
      );
    }
  }
}

class MyNavbar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a to="#home">Tracklift</a>
          </Navbar.Brand>
        </Navbar.Header>
        <NavbarItems loggedIn={this.props.loggedIn} />
      </Navbar>
    );
  }
}


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MyNavbar />
          <Route path="/login" component={Login} />
          <Route path="/sign-up" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
