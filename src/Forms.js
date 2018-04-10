import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { LocalForm, Control, combineForms } from 'react-redux-form';
import { LinkContainer } from 'react-router-bootstrap';
import { genSalt, hash } from 'bcryptjs';
import Client from 'pg-native';

const client = new Client();

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
const Email = () => (
    <div className="field">
      <label>Email:</label>
      <Control.text 
        type="email"
        model='.email'
        validateOn='submit'
      />
    </div>
);

const ConfirmEmail = () => (
    <div className="field">
      <label>Confirm email:</label>
      <Control.text 
        type="email"
        model='.confirmEmail'
        validateOn='submit'
      />
    </div>
);

const Password = () => (
  <div className="field">
    <label>Password:</label>
    <Control.text
      model='.password'
      type="password"
      validateOn='submit'
    />
  </div> 
);

const ConfirmPassword = () => (
  <div className="field">
    <label>Confirm password:</label>
    <Control.text
      model='.confirmPassword'
      type="password"
      validateOn='submit'
    />
  </div> 
);

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
      <LocalForm model="login" onSubmit={v => this.handleSubmit(v)}>
        <Email />
        <Password />
        <LinkContainer to="/submit-login">
          <Button>
            Log In!
          </Button>
        </LinkContainer>
        <LinkContainer to="/forgot-pw">
          <button>
            Forgot your password?
          </button>
        </LinkContainer>
      </LocalForm>
    );
  }
}

class SignUp extends Component {
  handleSubmit(v) {
    console.log('Signup form received data: ' + JSON.stringify(v));
    let { email, confirmEmail, password, confirmPassword } = v;
    let formNeedsCorrecting = false;
    if (email !== confirmEmail) {
      // TODO reject mismatched emails somehow
      console.log('Emails do not match! ' + email + ' !== ' + confirmEmail);
      formNeedsCorrecting = true;
    }
    if (password !== confirmPassword) {
      // TODO reject mismatched passwords somehow
      console.log('Passwords do not match!');
      formNeedsCorrecting = true;
    }
    if (!password.match(/\w/i)) {
      // TODO reject invalid PW somehow
      console.log('Password does not have alphabetical characters!');
      formNeedsCorrecting = true;
    }
    if (!password.match(/\d/i)) {
      // TODO reject invalid PW somehow
      console.log('Password has no numeric characters!');
      formNeedsCorrecting = true;
    }

    if (!formNeedsCorrecting) {
      genSalt(10, (err, salt) => {
        hash(v.password, salt, (err, hash) => {
          console.log('salt = ' + salt + ' pw hash = ' + hash);
          client.connect('postgresql://localhost:5432/tracklift-users',
            (err) =>{
              if (err) {
                console.log('Error encountered: ' + JSON.stringify(err));
              } else {
                console.log('Succesfully connected.');
              }
            });
        });
      });
    }
  }
  // TODO  styling
  // TODO  check password meets guidelines and that both passwords match!
  // TODO  figure out why Button component doesn't fire submit event; maybe can use styling instead?
  render() {
    return (
      <LocalForm model="signup" 
          validateOn='submit'
          onSubmit={v => this.handleSubmit(v)}>
        <Email />
        <ConfirmEmail />
        <Password />
        <ConfirmPassword />
        <button>
          Sign me up!
        </button>
      </LocalForm>
    );
  }
}

export { Login, SignUp, initialLogin, initialSignUp, forms };
