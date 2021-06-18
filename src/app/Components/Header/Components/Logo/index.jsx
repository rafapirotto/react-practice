import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles/Logo.module.css';
import { DASHBOARD_ROUTE } from '../../../../routes';

const Logo = () => (
  <Link to={DASHBOARD_ROUTE}>
    <div id="logo-btn" className={`${styles.movy} text-4xl`}>
      Movy
    </div>
  </Link>
);

export default Logo;
