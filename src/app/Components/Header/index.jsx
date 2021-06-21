import React from 'react';

import AuthenticatedHeader from './Components/AuthenticatedHeader';
import NonAuthenticatedHeader from './Components/NonAuthenticatedHeader';
import { isAuthenticated } from '../../utils';

const Header = () => (isAuthenticated() ? <AuthenticatedHeader /> : <NonAuthenticatedHeader />);

export default Header;
