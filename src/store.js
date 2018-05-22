import { List } from 'immutable';
import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';

const initialLoginState = {
  email: '',
  password: '',
}

const initialSignUpState = {
  email: '',
  password: '',
  confirmPassword: '',
}

const initialForgotPWState = {
  email: '',
}

const initialResetPWState = {
  password: '',
  confirmPassword: '',
}

const initialWorkoutsState = {
  workouts: List(),
}

const initialEditWorkoutState = {
  date: undefined,
  lifts: List()
}

const forms = combineForms({
  login: initialLoginState,
  signUp: initialSignUpState,
  forgotPW: initialForgotPWState,
  resetPW: initialResetPWState,
  workouts: initialWorkoutsState,
  editWorkout: initialEditWorkoutState,
});

const store = createStore(forms);

export default store;
