import React from 'react';
import { Field, reduxForm } from "redux-form";
import classnames from 'classnames';
import { Checkbox, withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';

import { validate } from "./validate";
import styles from './styles';
import theme from './LoginForm.scss';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

const StyledCheckbox = withStyles(styles)(Checkbox);

const renderCheckboxField = ({ input, label }) => (
    <div className={ classnames(theme.checkbox, theme.formField) }>
     <StyledCheckbox {...input} />
      <label>{ label }</label>
    </div>
);

const renderLoginField = ({ input, label, meta: { touched, error }}) => (
  <div className={ classnames(theme.login, theme.formField) }>
    <label>{ label }</label>
    <input
      type="text"
      { ...input }
    />
    {
      touched &&
      error &&
      <div className={ theme.error }>
        { error }
      </div>
    }
  </div>
);

const LoginForm = ({ handleSubmit, onSubmit }) => (
      <form onSubmit={ handleSubmit(onSubmit) } className={ theme.loginForm }>
        <Field name="login" label="Enter your name:" component={ renderLoginField }/>
        <Field name="remembered" label="Remember me?" component={ renderCheckboxField }/>
        <button className={ theme.formSubmit } type="submit">Sign in</button>
      </form>
);

LoginForm.propTypes = propTypes;

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);
