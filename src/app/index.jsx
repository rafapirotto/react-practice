import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home } from './Components';
import { MyListContainer, TrailerContainer } from './Containers';
import { HOME_ROUTE, MY_LIST_ROUTE, TRAILER_ROUTE } from './routes';
import { HeaderWrapper } from '../common/Components';

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path={HOME_ROUTE}
        render={(props) => (
          <HeaderWrapper position="absolute">
            <Home {...props} />
          </HeaderWrapper>
        )}
      />
      <Route
        exact
        path={MY_LIST_ROUTE}
        render={() => (
          <HeaderWrapper>
            <MyListContainer />
          </HeaderWrapper>
        )}
      />
      <Route
        exact
        path={TRAILER_ROUTE}
        render={(props) => (
          <HeaderWrapper>
            <TrailerContainer {...props} />
          </HeaderWrapper>
        )}
      />
    </Switch>
  </Router>
);

export default App;
