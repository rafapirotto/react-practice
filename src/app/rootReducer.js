import { combineReducers } from 'redux';

import PopularMoviesReducer from './Containers/PopularContainer/duck/reducers';
import MyListReducer from './Containers/MyListContainer/duck/reducers';
import ContinueWatchingReducer from './Containers/ContinueWatchingContainer/duck/reducers';
import MostViewedReducer from './Containers/MostViewedContainer/duck/reducers';
import RecommendedReducer from './Containers/RecommendedMoviesContainer/duck/reducers';

const appReducer = combineReducers({
  popularMovies: PopularMoviesReducer,
  myListMovies: MyListReducer,
  continueWatchingMovies: ContinueWatchingReducer,
  mostViewedMovies: MostViewedReducer,
  recommendedMovies: RecommendedReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
