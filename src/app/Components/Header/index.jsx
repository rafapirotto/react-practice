import React from 'react';
import PropTypes from 'prop-types';

import HeaderItemList from './Components/HeaderItemList';
import HeaderOptionList from './Components/HeaderOptionList';
import Logo from './Components/Logo';

const propTypes = {
  position: PropTypes.string,
};

const defaultProps = {
  position: '',
};

const Header = ({ position }) => (
  <header className={`flex ml-24 pr-10 py-20 w-11/12 z-10 ${position}`}>
    <Logo />
    <HeaderItemList />
    <HeaderOptionList />
  </header>
);

Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
