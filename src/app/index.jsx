import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Home } from './Components';
import { MyListContainer, TrailerContainer } from './Containers';
import { HOME_ROUTE, MY_LIST_ROUTE, TRAILER_ROUTE } from './routes';

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path={HOME_ROUTE} component={Home} />
        <Route exact path={MY_LIST_ROUTE} component={MyListContainer} />
        <Route exact path={TRAILER_ROUTE} component={TrailerContainer} />
      </Switch>
    </Router>
  </>
);

export default App;
