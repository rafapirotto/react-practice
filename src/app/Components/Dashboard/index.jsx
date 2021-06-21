import React from 'react';
import { Switch, Redirect, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MovieListContainer, TrailerContainer } from '../../Containers';
import { Home } from '../';
import { getMyList } from '../../Containers/MyListContainer/duck/operations';

import { DASHBOARD_ROUTE, MY_LIST_ROUTE, TRAILER_ROUTE } from '../../routes';

const Dashboard = () => {
  const myListMoviesSelector = useSelector((state) => state.myListMovies);

  return (
    <div>
      <Switch>
        <Route exact path={DASHBOARD_ROUTE} render={(props) => <Home {...props} />} />
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
        <Redirect exact from={`${DASHBOARD_ROUTE}/*`} to={DASHBOARD_ROUTE} />
      </Switch>
    </div>
  );
};

export default Dashboard;
