import React from 'react';
import { Link } from 'react-router-dom';

import { LOGIN_ROUTE } from '../../../../routes';
import Logo from '../Logo';

const NonAuthenticatedHeader = () => (
  <div className="absolute w-full">
    <header className="flex pl-24 pr-10 py-20">
      <Logo to={LOGIN_ROUTE} />
      <div className="flex flex-grow justify-end">
        <div className="mr-4">
          <Link to={LOGIN_ROUTE}>Register</Link>
        </div>
        <Link to={LOGIN_ROUTE}>
          <div className="text-center rounded-md w-24 h-8 bg-blue-500">Login</div>
        </Link>
      </div>
    </header>
  </div>
);

export default NonAuthenticatedHeader;
