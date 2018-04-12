import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Form, Control, Errors } from 'react-redux-form';
import { required, passwordsMatch, longEnough, hasNumbers, hasLetters, isEmail } from './validators.js';


class Login extends Component {
  handleSubmit(v) {
    console.log('Received submit on Login form with data ' + JSON.stringify(v));
  }

  render() {
    return (
      <Form 
        model='login'
        onSubmit={v => this.handleSubmit(v)}
      >

        <label>
          Email:
        </label>

        <Control.text
          id='login.email'
          model='login.email'
          type='email'
          validators={{ isEmail }}
        />

        <label>
          Password:
        </label>

        <Control.text
          id='login.password'
          model='login.password'
          type='password'
        />

        <button>
          Log in
        </button>

        <button>
          Forgot your password?
        </button>
      </Form>
    );
  }
}

export default Login;
