import { createStore } from 'redux';
import { combineForms } from 'react-redux-form';

const initialLoginState = {
  email: '',
  password: '',
}

const initialSignUpState = {
  email: '',
  confirmEmail: '',
  password: '',
  confirmPassword: '',
}

const forms = combineForms({
  login: initialLoginState,
  signUp: initialSignUpState,
});

const store = createStore(forms);

export default store;
