import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

const ProviderRouterWrapper = ({ children, store }) => (
  <Provider store={store}>
    <Router>{children}</Router>
  </Provider>
);

export default ProviderRouterWrapper;
