import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header } from './Components';
import { MovieListContainer, TrailerContainer } from './Containers';

const App = () => (
  <>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/my-list" component={MovieListContainer} />
        <Route exact path="/trailers/:movieId" component={TrailerContainer} />
      </Switch>
    </Router>
  </>
);

export default App;
