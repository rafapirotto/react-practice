import React from 'react';

import styles from './styles/Logo.module.css';

const Logo = () => (
  <a href="/#">
    <div className={`${styles.movy} text-4xl`}>Movy</div>
  </a>
);

export default Logo;
