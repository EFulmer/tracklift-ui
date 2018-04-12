import React, { Component } from 'react';
import { Form, Control, Errors } from 'react-redux-form';

import { passwordsMatch, longEnough, hasNumbers, hasLetters } from './validators.js';

class ResetPassword extends Component {
  // TODO (Eric) : all of this.
  handleSubmit(values) {
  }

  // TODO (Eric) : Form styling.
  render() {
    return (
      <Form 
        model='resetPW'
        onSubmit={(values) => this.handleSubmit(values)}
        validators={{
          '': { passwordsMatch },
        }}
      >
        <Errors
          model='resetPW'
          messages={{
            passwordsMatch: 'Your passwords must match.',
          }}
          show='touched'
        />

        <label>
          Password:
        </label>
        <Control.text
          id='resetPW.password'
          model='resetPW.password'
          type='password'
          validateOn='focus'
          validators={{ longEnough, hasNumbers, hasLetters }}
        />
        <Errors
          model='resetPW.password'
          messages={{
            longEnough: 'Your password must be at least 6 characters long.',
            hasNumbers: 'Your password must have letters and numbers.',
            hasLetters: 'Your password must have letters and numbers.',
          }}
          show={(field) => field.touched && !field.focus}
        />

        <label>Confirm password:</label>
        <Control.text
          id='resetPW.confirmPassword'
          model='resetPW.confirmPassword'
          type='password'
          validateOn='focus'
          validators={{ longEnough, hasNumbers, hasLetters }}
          show='touched'
        />
        <Errors
          model='resetPW.confirmPassword'
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

export default ResetPassword;
