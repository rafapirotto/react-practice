import {
  REQUEST_ADD_TO_MY_LIST,
  SUCCESS_ADD_TO_MY_LIST,
  ERROR_ADD_TO_MY_LIST,
} from './actionTypes';
import { ERROR, SUCCESS, LOADING } from '../../../../common/constants';

const initialState = { state: null, content: null };

const MovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_ADD_TO_MY_LIST:
      return {
        ...state,
        state: LOADING,
      };
    case SUCCESS_ADD_TO_MY_LIST:
      return {
        state: SUCCESS,
        content: action.payload.movies,
      };
    case ERROR_ADD_TO_MY_LIST:
      return {
        state: ERROR,
        content: action.error,
      };
    default:
      return state;
  }
};

export default MovieReducer;
