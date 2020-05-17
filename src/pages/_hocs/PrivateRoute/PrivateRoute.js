import React from 'react';
import { Route } from "react-router-dom";
import PropTypes from 'prop-types';

import PrivatePage from './PrivatePage';

const propTypes = {
  component: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
};

const PrivateRoute = ({ path, component: Component }) => (
   <Route
       path={ path }
       render={ (props) => (
         <PrivatePage>
           <Component {...props}/>
         </PrivatePage>
       ) }
   />
);

PrivateRoute.propTypes = propTypes;

export default PrivateRoute;
