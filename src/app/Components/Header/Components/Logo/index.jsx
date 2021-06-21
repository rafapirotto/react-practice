import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles/Logo.module.css';

const propTypes = {
  to: PropTypes.string.isRequired,
};

const Logo = ({ to }) => (
  <Link to={to}>
    <div id="logo-btn" className={`text-4xl ${styles.movy}`}>
      Movy
    </div>
  </Link>
);

Logo.propTypes = propTypes;

export default Logo;
