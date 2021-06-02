import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
};

const defaultProps = {
  styles: '',
};

const HeaderItem = ({ title, styles }) => (
  <div className={styles}>
    <Link to="/">{title}</Link>
  </div>
);

HeaderItem.propTypes = propTypes;
HeaderItem.defaultProps = defaultProps;

export default HeaderItem;
