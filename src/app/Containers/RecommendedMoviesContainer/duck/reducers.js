import {
  REQUEST_GET_RECOMMENDED,
  SUCCESS_GET_RECOMMENDED,
  ERROR_GET_RECOMMENDED,
} from './actionTypes';
import { ERROR, SUCCESS, LOADING } from '../../../../common/constants';

const initialState = { state: null, content: null };

const RecommendedReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_RECOMMENDED:
      return {
        ...state,
        state: LOADING,
      };
    case SUCCESS_GET_RECOMMENDED:
      return {
        state: SUCCESS,
        content: action.payload.movies,
      };
    case ERROR_GET_RECOMMENDED:
      return {
        state: ERROR,
        content: action.error,
      };
    default:
      return state;
  }
};

export default RecommendedReducer;
