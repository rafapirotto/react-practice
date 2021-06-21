import { REQUEST_LOGIN, SUCCESS_LOGIN, ERROR_LOGIN } from './actionTypes';

export const requestLogin = () => ({
  type: REQUEST_LOGIN,
});

export const successLogin = (payload) => ({
  type: SUCCESS_LOGIN,
  payload,
});

export const errorLogin = (error) => ({
  type: ERROR_LOGIN,
  error,
});
