import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, MovieList, Trailer } from './Components';

const App = () => (
  <>
    <Header />
    <Router>
      <Switch>
        <Route exact path="/">
          <MovieList />
        </Route>
        <Route path="/trailers/:movie" component={Trailer} />
      </Switch>
    </Router>
  </>
);

export default App;
