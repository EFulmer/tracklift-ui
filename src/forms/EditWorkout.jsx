import React, { Component } from 'react';
import { Form, Control } from 'react-redux-form';

class EditWorkout extends Component {
  render() {
    return(
      <Form
        model='editWorkout'
      >
        <label>
          Date
        </label>
        <Control.text model='editWorkout.date'/>
      </Form>
    );
  }
}

export default EditWorkout;
