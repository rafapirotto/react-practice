import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string.isRequired,
  styles: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

const HeaderOption = ({ src, alt, styles }) => (
  <a href="/#">
    <img src={src} className={`mx-3 ${styles}`} alt={alt} />
  </a>
);

HeaderOption.propTypes = propTypes;

export default HeaderOption;
