import { REQUEST_GET_MY_LIST, SUCCESS_GET_MY_LIST, ERROR_GET_MY_LIST } from './actionTypes';
import { ERROR, SUCCESS, LOADING } from '../../../../common/constants';

const initialState = { state: null, content: null };

const MyListReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_MY_LIST:
      return {
        ...state,
        state: LOADING,
      };
    case SUCCESS_GET_MY_LIST:
      return {
        state: SUCCESS,
        content: action.payload.movies,
      };
    case ERROR_GET_MY_LIST:
      return {
        state: ERROR,
        content: action.error,
      };
    default:
      return state;
  }
};

export default MyListReducer;
