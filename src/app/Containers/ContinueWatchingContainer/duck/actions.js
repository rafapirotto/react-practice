import {
  REQUEST_GET_CONTINUE_WATCHING,
  SUCCESS_CONTINUE_WATCHING,
  ERROR_CONTINUE_WATCHING,
} from './actionTypes';

export const requestContinueWatching = () => ({
  type: REQUEST_GET_CONTINUE_WATCHING,
});

export const successContinueWatching = (payload) => ({
  type: SUCCESS_CONTINUE_WATCHING,
  payload,
});

export const errorContinueWatching = (error) => ({
  type: ERROR_CONTINUE_WATCHING,
  error,
});
