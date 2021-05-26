import React from 'react';

import HeaderItemList from './Components/HeaderItemList';
import HeaderOptionList from './Components/HeaderOptionList';
import Logo from './Components/Logo';

const Header = () => (
  <header className="flex ml-24 pr-10 py-20">
    <Logo />
    <HeaderItemList />
    <HeaderOptionList />
  </header>
);

export default Header;
