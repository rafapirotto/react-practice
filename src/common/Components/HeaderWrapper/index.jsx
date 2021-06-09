import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../../../app/Components';

const propTypes = {
  children: PropTypes.object.isRequired,
  position: PropTypes.string,
};

const defaultProps = {
  position: '',
};

const HeaderWrapper = ({ children, position }) => (
  <>
    <Header position={position} />
    {children}
  </>
);

HeaderWrapper.propTypes = propTypes;
HeaderWrapper.defaultProps = defaultProps;

export default HeaderWrapper;
