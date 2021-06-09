import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const FooterItem = ({ title }) => (
  <div className="pb-2">
    <Link to="/">{title}</Link>
  </div>
);

FooterItem.propTypes = propTypes;

export default FooterItem;
