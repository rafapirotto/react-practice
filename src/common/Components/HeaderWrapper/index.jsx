import React from 'react';

import { Header } from '../../../app/Components';

const HeaderWrapper = ({ children, position }) => (
  <>
    <Header position={position} />
    {children}
  </>
);

export default HeaderWrapper;
