import { combineReducers } from 'redux';

import MoviesReducer from './Containers/MovieList/duck/reducers';
import MovieReducer from './Containers/Movie/duck/reducers';

const appReducer = combineReducers({
  movies: MoviesReducer,
  movie: MovieReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
