import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  isAuthorized: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export const PrivatePage = ({ isAuthorized, children }) => {
  if(!isAuthorized)
    return <Redirect to="/login" />;

  return children
};

PrivatePage.propTypes = propTypes;

export default PrivatePage;
