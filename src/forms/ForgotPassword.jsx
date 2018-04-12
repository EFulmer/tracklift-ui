import React, { Component } from 'react';
import { Form, Control } from 'react-redux-form';

import { isEmail } from './validators.js';

class ForgotPassword extends Component {
  // TODO (Eric) : send request to back end
  handleSubmit(v) {
    console.log('Received submit on Login form with data ' + JSON.stringify(v));
  }

  render() {
    return (
      <Form 
        model='forgotPW'
        onSubmit={v => this.handleSubmit(v)}
      >

        <label>
          Email:
        </label>
        <Control.text
          id='forgotPW.email'
          model='forgotPW.email'
          type='email'
          validators={{ isEmail }}
        />

        <button>
          Request password reset
        </button>
      </Form>
    );
  }
}

export default ForgotPassword;
