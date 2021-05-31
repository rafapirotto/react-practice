import { REQUEST_GET_MOVIE, SUCCESS_GET_MOVIE, ERROR_GET_MOVIE } from './actionTypes';
import { ERROR, SUCCESS, LOADING } from '../../../../common/constants';

const initialState = { state: null, content: null };

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_MOVIE:
      return {
        ...state,
        state: LOADING,
      };
    case SUCCESS_GET_MOVIE:
      return {
        state: SUCCESS,
        content: action.payload,
      };
    case ERROR_GET_MOVIE:
      return {
        state: ERROR,
        content: action.error,
      };
    default:
      return state;
  }
};

export default MovieReducer;
