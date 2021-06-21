import React from 'react';
import { Link } from 'react-router-dom';

import { movy } from './logo.module.css';
import { DASHBOARD_ROUTE } from '../../../../routes';

const Logo = () => (
  <Link to={DASHBOARD_ROUTE}>
    <div id="logo-btn" className={`text-4xl ${movy}`}>
      Movy
    </div>
  </Link>
);

export default Logo;
