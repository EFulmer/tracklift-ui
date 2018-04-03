import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { LocalForm, Control, Errors, combineForms } from 'react-redux-form';
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
  confirmEmail: '',
  password: '',
  confirmPassword: '',
}

const forms = combineForms({
  login: initialLogin,
  signUp: initialSignUp,
});

// TODO  reduce repetition: there should be a way to write a single function that creates the needed Control rather than having four const declarations here.
// Email and Password are not Fieldsets because I'm not sure whether that
// works for what I want to do yet.
const Email = () => (
    <div className="field">
      <label>Email:</label>
      <Control.text 
        type="email"
        model='.email'
        validators={{
          required,
          isEmail,
        }}
      />
      <Errors
        className="errors"
        model='.email'
        show="touched"
        messages={{
          required: 'Please enter a valid email address.'
        }}
      />
    </div>
);

const ConfirmEmail = () => (
    <div className="field">
      <label>Confirm email:</label>
      <Control.text 
        type="email"
        model='.confirmEmail'
        validators={{
          required,
          isEmail,
        }}
      />
      <Errors
        className="errors"
        model='.confirmEmail'
        show="touched"
        messages={{
          required: 'Please enter a valid email address.'
        }}
      />
    </div>
);

const Password = () => (
  <div className="field">
    <label>Password:</label>
    <Control.text
      model='.password'
      type="password"
      validators={{
        required
      }}
    />
    <Errors
      className="errors"
      model='.password'
      show="touched"
      messages={{
        required: 'Please enter a password.'
      }}
    />
  </div> 
);

const ConfirmPassword = () => (
  <div className="field">
    <label>Confirm password:</label>
    <Control.text
      model='.confirmPassword'
      type="password"
      validators={{
        required
      }}
    />
    <Errors
      className="errors"
      model='.confirmPassword'
      show="touched"
      messages={{
        required: 'Please enter a password.'
      }}
    />
  </div> 
);

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
        <Email />
        <Password />
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
        <Email />
        <ConfirmEmail />
        <Password />
        <ConfirmPassword />
        <Button>
          Sign me up!
        </Button>
      </LocalForm>
    );
  }
}

export { Login, SignUp, initialLogin, initialSignUp, forms };
