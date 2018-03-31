import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './App.css';

class NavbarItems extends Component {
  render() {
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

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyNavbar />
        <p className="App-intro">
          Hello React!
        </p>
      </div>
    );
  }
}


export default App;
