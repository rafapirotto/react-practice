import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { DASHBOARD_ROUTE } from '../../../../../app/routes';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const FooterItem = ({ title }) => (
  <div className="pb-2">
    <Link to={DASHBOARD_ROUTE}>{title}</Link>
  </div>
);

FooterItem.propTypes = propTypes;

export default FooterItem;
