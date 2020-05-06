import React from 'react';
import { Field } from "redux-form";
import { Row, Col } from 'react-flexbox-grid';
import classnames from 'classnames';

import theme from './LoginForm.scss';

const LoginForm = ({ handleSubmit }) => (
    <form onSubmit={ handleSubmit } className={ theme.loginForm }>
      <Row className={ classnames(theme.login, theme.formField) }>
        <label htmlFor="login">
          Enter your name:
        </label>
        <Field name="login" component="input" type="text"/>
      </Row>
      <Row className={ classnames(theme.checkbox, theme.formField) }>
        <Field name="rememberMe" component="input" type="checkbox"/>
        <label htmlFor="rememberMe">
          Remember me?
        </label>
      </Row>
      <button className={ theme.formSubmit } type="submit">Sign in</button>
    </form>
);

export default LoginForm;
