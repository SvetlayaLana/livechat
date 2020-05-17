import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from "prop-types";
import { connect } from "react-redux";

const propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

const CustomRoute = ({ path, component: Component, isAuthorized, ...rest }) => (
  <Route
    { ...rest }
    path={ path }
    render={ props => {
      if(isAuthorized)
        return <Redirect to="/chat"/>;

      return <Component { ...props }/>
    } }
  />
);

CustomRoute.propTypes = propTypes;

export default connect(
    state => ({
      isAuthorized: state.authorization.isAuthorized,
    })
)(CustomRoute);
