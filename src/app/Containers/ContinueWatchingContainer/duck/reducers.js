import {
  REQUEST_GET_CONTINUE_WATCHING,
  SUCCESS_CONTINUE_WATCHING,
  ERROR_CONTINUE_WATCHING,
} from './actionTypes';
import { ERROR, SUCCESS, LOADING } from '../../../../common/constants';

const initialState = { state: null, content: null };

const ContinueWatchingReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_CONTINUE_WATCHING:
      return {
        ...state,
        state: LOADING,
      };
    case SUCCESS_CONTINUE_WATCHING:
      return {
        state: SUCCESS,
        content: action.payload.movies,
      };
    case ERROR_CONTINUE_WATCHING:
      return {
        state: ERROR,
        content: action.error,
      };
    default:
      return state;
  }
};

export default ContinueWatchingReducer;
