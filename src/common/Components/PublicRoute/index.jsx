import React from 'react';
import { Redirect } from 'react-router-dom';
import { elementType } from 'prop-types';

import { DASHBOARD_ROUTE } from '../../../app/routes';
import { isAuthenticated } from '../../../app/utils';

const PublicRoute = ({ Component }) =>
  isAuthenticated() ? <Redirect to={{ pathname: DASHBOARD_ROUTE }} /> : <Component />;

PublicRoute.propTypes = {
  Component: elementType.isRequired,
};

export default PublicRoute;
