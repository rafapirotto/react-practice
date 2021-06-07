import { combineReducers } from 'redux';

import PopularMoviesReducer from './Containers/PopularContainer/duck/reducers';
import MyListReducer from './Containers/MyListContainer/duck/reducers';
import ContinueWatchingReducer from './Containers/ContinueWatchingContainer/duck/reducers';

const appReducer = combineReducers({
  popularMovies: PopularMoviesReducer,
  myListMovies: MyListReducer,
  continueWatchingMovies: ContinueWatchingReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
