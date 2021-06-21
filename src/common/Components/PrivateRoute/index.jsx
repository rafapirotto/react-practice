import React from 'react';
import { Redirect } from 'react-router-dom';
import { elementType } from 'prop-types';

import { LOGIN_ROUTE } from '../../../app/routes';
import { isAuthenticated } from '../../../app/utils';

const PrivateRoute = ({ Component }) =>
  isAuthenticated() ? <Component /> : <Redirect to={{ pathname: LOGIN_ROUTE }} />;

PrivateRoute.propTypes = {
  Component: elementType.isRequired,
};

export default PrivateRoute;
