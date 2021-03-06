import { combineReducers } from 'redux';

import PopularMoviesReducer from './Containers/PopularContainer/duck/reducers';
import MyListReducer from './Containers/MyListContainer/duck/reducers';
import ContinueWatchingReducer from './Containers/ContinueWatchingContainer/duck/reducers';
import MostViewedReducer from './Containers/MostViewedContainer/duck/reducers';
import RecommendedReducer from './Containers/RecommendedMoviesContainer/duck/reducers';
import LoginReducer from './Containers/LoginContainer/duck/reducers';
import UserProfileReducer from './Containers/UserProfileContainer/duck/reducers';
import MovieReducer from './Containers/MovieContainer/duck/reducers';

const appReducer = combineReducers({
  popularMovies: PopularMoviesReducer,
  myListMovies: MyListReducer,
  continueWatchingMovies: ContinueWatchingReducer,
  mostViewedMovies: MostViewedReducer,
  recommendedMovies: RecommendedReducer,
  login: LoginReducer,
  userProfile: UserProfileReducer,
  movie: MovieReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
