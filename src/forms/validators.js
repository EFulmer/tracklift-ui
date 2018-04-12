
const hasLetters = (val) => !!val && !!val.match && !!val.match(/[a-z]/i);

const hasNumbers = (val) => !!val && !!val.match && !!val.match(/\d/);

const isEmail = (val) => {
  let re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  return re.test(String(val).toLowerCase());
};

const longEnough = (val) => !!val && !!val.length && val.length > 5;

const required = (val) => val && val.hasOwnProperty('length') && val.length > 0;
const passwordsMatch = ({password, confirmPassword}) => password === confirmPassword;

export { hasLetters, hasNumbers, isEmail, longEnough, required, passwordsMatch };
