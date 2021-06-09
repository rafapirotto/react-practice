import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, Header } from './Components';
import { MyListContainer, TrailerContainer } from './Containers';
import { HOME_ROUTE, MY_LIST_ROUTE, TRAILER_ROUTE } from './routes';
import { Footer } from '../common/Components';

const App = () => (
  <Router>
    <Header />
    <Switch>
      <Route exact path={HOME_ROUTE} render={(props) => <Home {...props} />} />
      <Route exact path={MY_LIST_ROUTE} render={() => <MyListContainer />} />
      <Route exact path={TRAILER_ROUTE} render={(props) => <TrailerContainer {...props} />} />
    </Switch>
    <Footer />
  </Router>
);

export default App;
