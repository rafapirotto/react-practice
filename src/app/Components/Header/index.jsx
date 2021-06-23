import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import AuthenticatedHeader from './Components/AuthenticatedHeader';
import NonAuthenticatedHeader from './Components/NonAuthenticatedHeader';
import { isAuthenticated } from '../../utils';

const Header = () => {
  const { pathname } = useLocation();

  useEffect(() => {}, [pathname]);

  return isAuthenticated() ? <AuthenticatedHeader /> : <NonAuthenticatedHeader />;
};

export default Header;
