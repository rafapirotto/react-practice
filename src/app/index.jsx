import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';

import { Login, Dashboard, Footer, Header } from './Components';
import { LOGIN_ROUTE, DASHBOARD_ROUTE } from './routes';
import { PrivateRoute, PublicRoute } from '../common/Components';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <PrivateRoute path={DASHBOARD_ROUTE} Component={Dashboard} />
      <PublicRoute exact path={LOGIN_ROUTE} Component={Login} />
      <Redirect from="*" to={LOGIN_ROUTE} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
