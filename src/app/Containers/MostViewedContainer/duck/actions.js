import {
  REQUEST_GET_MOST_VIEWED,
  SUCCESS_GET_MOST_VIEWED,
  ERROR_GET_MOST_VIEWED,
} from './actionTypes';

export const requestGetMostViewed = () => ({
  type: REQUEST_GET_MOST_VIEWED,
});

export const successGetMostViewed = (payload) => ({
  type: SUCCESS_GET_MOST_VIEWED,
  payload,
});

export const errorGetMostViewed = (error) => ({
  type: ERROR_GET_MOST_VIEWED,
  error,
});
