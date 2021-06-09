import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, Header } from './Components';
import { MovieListContainer, TrailerContainer } from './Containers';
import { HOME_ROUTE, MY_LIST_ROUTE, TRAILER_ROUTE } from './routes';
import { Footer } from '../common/Components';
import { getMyList } from './Containers/MyListContainer/duck/operations';

const App = () => {
  const myListMoviesSelector = useSelector((state) => state.myListMovies);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path={HOME_ROUTE} render={(props) => <Home {...props} />} />
        <Route
          exact
          path={MY_LIST_ROUTE}
          render={() => (
            <MovieListContainer
              operation={getMyList}
              title="My List"
              selector={myListMoviesSelector}
            />
          )}
        />
        <Route exact path={TRAILER_ROUTE} render={(props) => <TrailerContainer {...props} />} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
