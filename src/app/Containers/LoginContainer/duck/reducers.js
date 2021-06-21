import { REQUEST_LOGIN, SUCCESS_LOGIN, ERROR_LOGIN } from './actionTypes';
import { ERROR, SUCCESS, LOADING } from '../../../../common/constants';

const initialState = { state: null, content: null };

const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_LOGIN:
      return {
        ...state,
        state: LOADING,
      };
    case SUCCESS_LOGIN:
      return {
        state: SUCCESS,
        content: action.payload.token,
      };
    case ERROR_LOGIN:
      return {
        state: ERROR,
        content: action.error,
      };
    default:
      return state;
  }
};

export default LoginReducer;
