import {
  REQUEST_GET_PROFILE,
  SUCCESS_GET_PROFILE,
  ERROR_GET_PROFILE,
  REQUEST_EDIT_PROFILE,
  SUCCESS_EDIT_PROFILE,
  ERROR_EDIT_PROFILE,
} from './actionTypes';

export const requestGetProfile = () => ({
  type: REQUEST_GET_PROFILE,
});

export const successGetProfile = (payload) => ({
  type: SUCCESS_GET_PROFILE,
  payload,
});

export const errorGetProfile = (error) => ({
  type: ERROR_GET_PROFILE,
  error,
});

export const requestEditProfile = () => ({
  type: REQUEST_EDIT_PROFILE,
});

export const successEditProfile = (payload) => ({
  type: SUCCESS_EDIT_PROFILE,
  payload,
});

export const errorEditProfile = (error) => ({
  type: ERROR_EDIT_PROFILE,
  error,
});
