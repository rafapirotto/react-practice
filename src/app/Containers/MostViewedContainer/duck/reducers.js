import {
  REQUEST_GET_MOST_VIEWED,
  SUCCESS_GET_MOST_VIEWED,
  ERROR_GET_MOST_VIEWED,
} from './actionTypes';
import { ERROR, SUCCESS, LOADING } from '../../../../common/constants';

const initialState = { state: null, content: null };

const MostViewedReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_MOST_VIEWED:
      return {
        ...state,
        state: LOADING,
      };
    case SUCCESS_GET_MOST_VIEWED:
      return {
        state: SUCCESS,
        content: action.payload.movies,
      };
    case ERROR_GET_MOST_VIEWED:
      return {
        state: ERROR,
        content: action.error,
      };
    default:
      return state;
  }
};

export default MostViewedReducer;
