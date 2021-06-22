import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DASHBOARD_ROUTE } from '../../../../routes';

const propTypes = {
  src: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  to: PropTypes.string,
  onClick: PropTypes.func,
};

const defaultProps = {
  to: DASHBOARD_ROUTE,
  onClick: () => {},
};

const HeaderOption = ({ src, alt, styles, to, onClick }) => (
  <Link to={to} onClick={onClick}>
    <img src={src} className={`mx-3 ${styles}`} alt={alt} />
  </Link>
);

HeaderOption.propTypes = propTypes;
HeaderOption.defaultProps = defaultProps;

export default HeaderOption;
