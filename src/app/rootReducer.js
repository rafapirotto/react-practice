import { combineReducers } from 'redux';

import MoviesReducer from './Containers/MovieList/duck/reducers';

const appReducer = combineReducers({
  movies: MoviesReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
