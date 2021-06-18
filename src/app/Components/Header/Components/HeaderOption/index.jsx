import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DASHBOARD_ROUTE } from '../../../../routes';

const propTypes = {
  src: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const HeaderOption = ({ src, alt, styles }) => (
  <Link to={DASHBOARD_ROUTE}>
    <img src={src} className={`mx-3 ${styles}`} alt={alt} />
  </Link>
);

HeaderOption.propTypes = propTypes;

export default HeaderOption;
