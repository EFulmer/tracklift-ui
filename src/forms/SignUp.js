import React, { Component } from 'react';
import { Form, Control, Errors } from 'react-redux-form';
import { genSalt, hash } from 'bcryptjs';
import { passwordsMatch, longEnough, hasNumbers, hasLetters, isEmail } from './validators.js';

class SignUp extends Component {
  handleSubmit(values) {
    let { password } = values;

    genSalt(10, (err, salt) => {
      hash(password, salt, (err, hash) => {
        console.log('salt = ' + salt + ' pw hash = ' + hash);
        // TODO fire request to backend
      });
    });
  }

  // TODO (Eric) : Form styling.
  // TODO (Eric) : Error styling for password errors.
  // TODO (Eric) : show passwords match error at proper time.
  // TODO (Eric) : figure out why bootstrap button doesn't fire submit event
  render() {
    return (
      <Form 
        model='signUp'
        onSubmit={(values) => this.handleSubmit(values)}
        validators={{
          '': { passwordsMatch },
        }}>
        <Errors
          model='signUp'
          messages={{
            passwordsMatch: 'Your passwords must match.',
          }}
          show='touched'
        />

        <label>
          Email:
        </label>
        <Control.text
          id='signUp.email'
          model='signUp.email'
          type='email'
          validators={{ isEmail }}
        />
        
        <label>
          Password:
        </label>
        <Control.text
          id='signUp.password'
          model='signUp.password'
          type='password'
          validateOn='focus'
          validators={{ longEnough, hasNumbers, hasLetters }}
        />
        <Errors
          model='signUp.password'
          messages={{
            longEnough: 'Your password must be at least 6 characters long.',
            hasNumbers: 'Your password must have letters and numbers.',
            hasLetters: 'Your password must have letters and numbers.',
          }}
          show={(field) => field.touched && !field.focus}
        />

        <label>Confirm password:</label>
        <Control.text
          id='signUp.confirmPassword'
          model='signUp.confirmPassword'
          type='password'
          validateOn='focus'
          validators={{ longEnough, hasNumbers, hasLetters }}
          show='touched'
        />
        <Errors
          model='signUp.confirmPassword'
          messages={{
            longEnough: 'Your password must be at least 6 characters long.',
            hasNumbers: 'Your password must have letters and numbers.',
            hasLetters: 'Your password must have letters and numbers.',
          }}
          show={(field) => field.touched && !field.focus}
        />

        <button>
          Sign me up!
        </button>

      </Form>
    );
  }
}

export default SignUp;
