import { REQUEST_GET_MOVIES, SUCCESS_GET_MOVIES, ERROR_GET_MOVIES } from './actionTypes';

export const requestGetMovies = () => ({
  type: REQUEST_GET_MOVIES,
});

export const successGetMovies = (payload) => ({
  type: SUCCESS_GET_MOVIES,
  payload,
});

export const errorGetMovies = (error) => ({
  type: ERROR_GET_MOVIES,
  error,
});
