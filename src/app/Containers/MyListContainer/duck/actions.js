import { REQUEST_GET_MY_LIST, SUCCESS_GET_MY_LIST, ERROR_GET_MY_LIST } from './actionTypes';

export const requestGetMyList = () => ({
  type: REQUEST_GET_MY_LIST,
});

export const successGetMyList = (payload) => ({
  type: SUCCESS_GET_MY_LIST,
  payload,
});

export const errorGetMyList = (error) => ({
  type: ERROR_GET_MY_LIST,
  error,
});
