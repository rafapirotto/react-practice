import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DASHBOARD_ROUTE } from '../../../../../app/routes';

const propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string,
};

const defaultProps = {
  to: DASHBOARD_ROUTE,
};

const FooterItem = ({ title, to }) => (
  <div className="pb-2">
    <Link to={to}>{title}</Link>
  </div>
);

FooterItem.propTypes = propTypes;
FooterItem.defaultProps = defaultProps;

export default FooterItem;
