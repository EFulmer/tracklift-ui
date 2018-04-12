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

const forms = combineForms({
  login: initialLoginState,
  signUp: initialSignUpState,
  forgotPW: initialForgotPWState,
  resetPW: initialResetPWState,
});

const store = createStore(forms);

export default store;
