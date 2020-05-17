export const validate = values => {

  const { login } = values;
  const errors = {};

  const regExp = /\W/i;

  if(!login)
    errors.login = "Required" ;
  else if(regExp.test(login))
    errors.login = "Must contain only letters and numbers";

  return errors;
};
