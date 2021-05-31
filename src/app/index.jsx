import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Trailer } from './Components';
import { MovieListContainer } from './Containers';

const App = () => (
  <>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/">
          <MovieListContainer />
        </Route>
        <Route path="/trailers/:movie" component={Trailer} />
      </Switch>
    </Router>
  </>
);

export default App;
