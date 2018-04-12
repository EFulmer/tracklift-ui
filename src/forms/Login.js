import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form as Form, Control, Errors } from 'react-redux-form';
import { LinkContainer } from 'react-router-bootstrap';
import { genSalt, hash } from 'bcryptjs';


class Login extends Component {
  handleSubmit(v) {
    // TODO  all of this
    alert(JSON.stringify(v));
  }
  render() {
    // TODO  line the elements of this form up in a nice grid
    //
    // TODO  assert password validity guides!
    //
    // TODO  figure out why Button component doesn't fire submit event; maybe can use styling instead?
    return (
      <Form model='login' onSubmit={v => this.handleSubmit(v)}>
        <LinkContainer to='/submit-login'>
          <Button>
            Log In!
          </Button>
        </LinkContainer>
        <LinkContainer to='/forgot-pw'>
          <button>
            Forgot your password?
          </button>
        </LinkContainer>
      </Form>
    );
  }
}

export default Login;
