import React from 'react';

import HeaderOption from '../HeaderOption';

import search from '../../assets/search.png';
import userImage from '../../assets/user-image.png';
import arrow from '../../assets/arrow.png';

import styles from './styles/HeaderOptionList.module.css';

const HeaderOptionList = () => (
  <div className="flex items-center flex-grow justify-end">
    <HeaderOption src={search} alt="search" styles={styles.search} />
    <HeaderOption src={userImage} alt="user" styles={styles.userImage} />
    <HeaderOption src={arrow} alt="arrow" styles={styles.arrow} />
  </div>
);

export default HeaderOptionList;
