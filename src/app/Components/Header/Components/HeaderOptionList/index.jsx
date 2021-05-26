import React from 'react';

import HeaderOption from '../HeaderOption';

import search from '../../assets/search.png';
import userImage from '../../assets/user-image.png';
import arrow from '../../assets/arrow.png';

const HeaderOptionList = () => (
  <div className="flex items-center flex-grow justify-end">
    <HeaderOption src={search} alt="search" styles="search" />
    <HeaderOption src={userImage} alt="user" styles="user-image" />
    <HeaderOption src={arrow} alt="arrow" styles="arrow" />
  </div>
);

export default HeaderOptionList;
