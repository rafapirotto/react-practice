import { combineReducers } from 'redux';

import GetMoviesReducer from './Components/MovieList/duck/reducers';

const appReducer = combineReducers({
  movieList: GetMoviesReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
