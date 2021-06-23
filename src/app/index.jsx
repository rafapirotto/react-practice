import React from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route } from 'react-router-dom';

import { Login, Dashboard, Footer, Header, PrivacyPolicy } from './Components';
import { LOGIN_ROUTE, DASHBOARD_ROUTE, PRIVACY_ROUTE } from './routes';
import { PrivateRoute, PublicRoute } from '../common/Components';

const App = (props) => (
  <Router>
    <Header />
    <Switch>
      <PrivateRoute path={DASHBOARD_ROUTE} Component={Dashboard} />
      <PublicRoute exact path={LOGIN_ROUTE} Component={() => <Login {...props} />} />
      <Route exact path={PRIVACY_ROUTE} component={PrivacyPolicy} />
      <Redirect from="*" to={LOGIN_ROUTE} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
