import { REQUEST_GET_MOVIES, SUCCESS_GET_MOVIES, ERROR_GET_MOVIES } from './actionTypes';
import { ERROR, SUCCESS, LOADING } from '../../../../common/constants';

const initialState = { status: { state: null, payload: null } };

const GetMoviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_MOVIES:
      return {
        ...state,
        status: { state: LOADING },
      };
    case SUCCESS_GET_MOVIES:
      return {
        ...state,
        status: { state: SUCCESS, payload: action.payload.movies },
      };
    case ERROR_GET_MOVIES:
      return {
        ...state,
        status: { state: ERROR, payload: action.error },
      };
    default:
      return state;
  }
};

export default GetMoviesReducer;
