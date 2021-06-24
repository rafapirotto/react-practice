import {
  REQUEST_ADD_TO_MY_LIST,
  SUCCESS_ADD_TO_MY_LIST,
  ERROR_ADD_TO_MY_LIST,
} from './actionTypes';

export const requestAddToMyList = () => ({
  type: REQUEST_ADD_TO_MY_LIST,
});

export const successAddToMyList = (payload) => ({
  type: SUCCESS_ADD_TO_MY_LIST,
  payload,
});

export const errorAddToMyList = (error) => ({
  type: ERROR_ADD_TO_MY_LIST,
  error,
});
