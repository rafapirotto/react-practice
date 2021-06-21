import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

import HeaderItemList from '../HeaderItemList';
import HeaderOptionList from '../HeaderOptionList';
import Logo from '../Logo';

import { DASHBOARD_ROUTE } from '../.././../../routes';

const propTypes = {
  position: PropTypes.string,
};

const defaultProps = {
  position: '',
};

const AuthenticatedHeader = () => {
  const { pathname } = useLocation();
  const position = pathname === DASHBOARD_ROUTE ? 'absolute' : '';

  return (
    <header className={`flex ml-24 pr-10 py-20 w-11/12 z-10 ${position}`}>
      <Logo to={DASHBOARD_ROUTE} />
      <HeaderItemList />
      <HeaderOptionList />
    </header>
  );
};

AuthenticatedHeader.propTypes = propTypes;
AuthenticatedHeader.defaultProps = defaultProps;

export default AuthenticatedHeader;
