import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import AuthenticatedHeader from './Components/AuthenticatedHeader';
import NonAuthenticatedHeader from './Components/NonAuthenticatedHeader';
import { isAuthenticated } from '../../utils';

const Header = () => {
  const { state } = useSelector((state) => state.login);

  useEffect(() => {}, [state]);

  return isAuthenticated() ? <AuthenticatedHeader /> : <NonAuthenticatedHeader />;
};

export default Header;
