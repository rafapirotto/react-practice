import { REQUEST_GET_MOVIES, SUCCESS_GET_MOVIES, ERROR_GET_MOVIES } from './actionTypes';
import { ERROR, SUCCESS, LOADING } from '../../../../common/constants';

const initialState = { state: null, content: null };

const PopularMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_MOVIES:
      return {
        ...state,
        state: LOADING,
      };
    case SUCCESS_GET_MOVIES:
      return {
        state: SUCCESS,
        content: action.payload.movies,
      };
    case ERROR_GET_MOVIES:
      return {
        state: ERROR,
        content: action.error,
      };
    default:
      return state;
  }
};

export default PopularMoviesReducer;
