import React, { Component } from 'react';
import { Navbar as BootstrapNavbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

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

class Navbar extends Component {
  render() {
    return (
      <BootstrapNavbar>
        <BootstrapNavbar.Header>
          <BootstrapNavbar.Brand>
            <a to="#home">Tracklift</a>
          </BootstrapNavbar.Brand>
        </BootstrapNavbar.Header>
        <NavbarItems loggedIn={this.props.loggedIn} />
      </BootstrapNavbar>
    );
  }
}

export default Navbar;
