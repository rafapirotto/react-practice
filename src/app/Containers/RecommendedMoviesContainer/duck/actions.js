import {
  REQUEST_GET_RECOMMENDED,
  SUCCESS_GET_RECOMMENDED,
  ERROR_GET_RECOMMENDED,
} from './actionTypes';

export const requestGetRecommended = () => ({
  type: REQUEST_GET_RECOMMENDED,
});

export const successGetRecommended = (payload) => ({
  type: SUCCESS_GET_RECOMMENDED,
  payload,
});

export const errorGetRecommended = (error) => ({
  type: ERROR_GET_RECOMMENDED,
  error,
});
