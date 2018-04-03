import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { LocalForm, Control Errors } from 'react-redux-form';
import { LinkContainer } from 'react-router-bootstrap';

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

const initialSignUp = {
  email: '',
  password: '',
  confirmPassword: '',
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
            Log In!
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

class SignUp extends Component {
  handleSubmit(v) {
    // TODO  hash the password and store that in the form!
    alert(JSON.stringify(v));
  }
  // TODO  check password meets guidelines and that both passwords match!
  render() {
    return (
      <LocalForm model="signup" onSubmit={v => this.handleSubmit(v)}>
        <div className="field">
          <label>Email:</label>
          <Control.text 
            type="email"
            model="signup.email"
            validators={{
              required,
              isEmail,
            }}
          />
          <Errors
            className="errors"
            model="signup.email"
            show="touched"
            messages={{
              required: 'Please enter a valid email address.',
              isEmail: 'Please enter a valid email address.',
            }}
          />
        </div>
        <div className="field">
          <label>Password:</label>
          <Control.text
            type="password"
            model="signup.password"
            validators={{
              required
            }}
          />
          <Errors
            className="errors"
            model="signup.password"
            show="touched"
            messages={{
              required: 'Please enter a password.'
            }}
          />
        </div>
        <div className="field">
          <label>Confim password:</label>
          <Control.text
            type="password"
            model="login.confirmPassword"
            validators={{
              required
            }}
          />
          <Errors
            className="errors"
            model="login.confirmPassword"
            show="touched"
            messages={{
              required: 'Please enter a password.'
            }}
          />
        </div>
        <LinkContainer to="/submit-login">
          <Button>
            Sign me up!
          </Button>
        </LinkContainer>
      </LocalForm>
    );
  }
}

export { Login, SignUp, initialLogin, initialSignUp };
