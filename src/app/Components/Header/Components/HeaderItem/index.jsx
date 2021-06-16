import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
  to: PropTypes.string,
  id: PropTypes.string.isRequired,
};

const defaultProps = {
  styles: '',
  to: '/',
};

const HeaderItem = ({ title, styles, to, id }) => (
  <div id={id} className={styles}>
    <Link to={to}>{title}</Link>
  </div>
);

HeaderItem.propTypes = propTypes;
HeaderItem.defaultProps = defaultProps;

export default HeaderItem;
