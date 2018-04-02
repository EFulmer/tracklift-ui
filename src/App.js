import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LocalForm, Control, combineForms, Errors } from 'react-redux-form';
import { createStore } from 'redux';
import './App.css';

const required = (val) => val && val.length;
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
    if (this.props.loggedIn) {
      return (
        <Nav>
          <NavItem eventKey={1} href="#">
            Add Workout
          </NavItem>
          <NavItem eventKey={2} href="#">
            Workout Log
          </NavItem>
        </Nav>
      );
    }
    else {
      return (
        <Nav>
          <NavItem eventKey={1} href="#">
            Log In
          </NavItem>
          <NavItem eventKey={2} href="#">
            Sign Up
          </NavItem>
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
            <a href="#home">Tracklift</a>
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
    // TODO  assert password validity guides!
    // TODO  assert that email is valid!
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
              required: 'Email is required'
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
              required: 'Password is required!'
            }}
          />
        </div>
        <button type="submit">
          Submit
        </button>
        <button type="submit">
          Forgot your password?
        </button>
      </LocalForm>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <p className="App-intro">
          Hello React!
        </p>
        <Login />
      </div>
    );
  }
}


export default App;
