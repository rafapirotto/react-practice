import { REQUEST_GET_MOVIE, SUCCESS_GET_MOVIE, ERROR_GET_MOVIE } from './actionTypes';

export const requestGetMovie = () => ({
  type: REQUEST_GET_MOVIE,
});

export const successGetMovie = (payload) => ({
  type: SUCCESS_GET_MOVIE,
  payload,
});

export const errorGetMovie = (error) => ({
  type: ERROR_GET_MOVIE,
  error,
});
