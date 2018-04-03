import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Button } from 'react-bootstrap';
import { LocalForm, Control, combineForms, Errors } from 'react-redux-form';
import { createStore } from 'redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import './App.css';

const required = (val) => val && val.length;
// TODO see if the isEmail function is actually needed.
const isEmail = (val) => {
  // Regex from https://stackoverflow.com/a/1373724/1893155
  const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i;
  return re.test(String(val));
}

const initialLogin = {
  email: '',
  password: '',
}

const initialRegister = {
  email: '',
  password: '',
  confirmPassword: '',
}

const store = createStore(combineForms({
  login: initialLogin,
  register: initialRegister,
}));


class NavbarItems extends Component {
  render() {
    // TODO  gonna need React Router here sometime!
      // TODO  eliminate boilerplate; repeated use of Router tag to wrap
    if (this.props.loggedIn) {
      return (
        <Router>
          <Nav>
            <LinkContainer eventKey={1} to="#">
              Add Workout
            </LinkContainer>
            <LinkContainer eventKey={2} to="#">
              Workout Log
            </LinkContainer>
          </Nav>
        </Router>
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
            <LinkContainer eventKey={2} to="#">
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

class Login extends Component {
  handleSubmit(v) {
    // TODO  hash the password and store that in the form!
    alert(JSON.stringify(v));
  }
  render() {
    // TODO  line the elements of this form up in a nice grid
    //
    // TODO  assert password validity guides!
    //
    // TODO  read up on `type` prop of Control.text and see if the isEmail validator is required.
    return (
      <LocalForm model="login" onSubmit={v => this.handleSubmit(v)}>
        <div className="field">
          <label>Email:</label>
          <Control.text 
            type="email"
            model="login.email"
            validators={{
              required,
              isEmail,
            }}
          />
          <Errors
            className="errors"
            model="login.email"
            show="touched"
            messages={{
              required: 'Please enter a valid email address.'
            }}
          />
        </div>
        <div className="field">
          <label>Password:</label>
          <Control.text
            model="login.password"
            validators={{
              required
            }}
          />
          <Errors
            className="errors"
            model="login.password"
            show="touched"
            messages={{
              required: 'Please enter a password.'
            }}
          />
        </div>
        <LinkContainer to="/submit-login">
          <Button>
            Submit
          </Button>
        </LinkContainer>
        <LinkContainer to="/forgot-pw">
          <Button>
            Forgot your password?
          </Button>
        </LinkContainer>
      </LocalForm>
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
        </div>
      </Router>
    );
  }
}

export default App;
