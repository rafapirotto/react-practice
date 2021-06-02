import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles/Logo.module.css';

const Logo = () => (
  <Link to="/">
    <div className={`${styles.movy} text-4xl`}>Movy</div>
  </Link>
);

export default Logo;
