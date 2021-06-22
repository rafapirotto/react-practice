import {
  REQUEST_GET_PROFILE,
  SUCCESS_GET_PROFILE,
  ERROR_GET_PROFILE,
  REQUEST_EDIT_PROFILE,
  SUCCESS_EDIT_PROFILE,
  ERROR_EDIT_PROFILE,
} from './actionTypes';
import { ERROR, SUCCESS, LOADING } from '../../../../common/constants';

const initialState = { state: null, content: null };

const UserProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_GET_PROFILE:
      return {
        ...state,
        state: LOADING,
      };
    case SUCCESS_GET_PROFILE:
      return {
        state: SUCCESS,
        content: action.payload,
      };
    case ERROR_GET_PROFILE:
      return {
        state: ERROR,
        content: action.error,
      };
    case REQUEST_EDIT_PROFILE:
      return {
        ...state,
        state: LOADING,
      };
    case SUCCESS_EDIT_PROFILE:
      return {
        state: SUCCESS,
        content: action.payload,
      };
    case ERROR_EDIT_PROFILE:
      return {
        state: ERROR,
        content: action.error,
      };
    default:
      return state;
  }
};

export default UserProfileReducer;
