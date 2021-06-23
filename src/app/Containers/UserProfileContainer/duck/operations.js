import axios from 'axios';

import {
  requestGetProfile,
  successGetProfile,
  errorGetProfile,
  requestEditProfile,
  successEditProfile,
  errorEditProfile,
} from './actions';
import { headers } from '../../../utils';

export const getUserProfile = () => (dispatch) => {
  dispatch(requestGetProfile());
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_GET_PROFILE_URL}`, headers())
    .then((response) => {
      dispatch(successGetProfile(response.data));
    })
    .catch(({ response }) => {
      const error = response.data;

      dispatch(errorGetProfile(error));
    });
};

export const editUserProfile = (fullName) => (dispatch) => {
  dispatch(requestEditProfile());
  return axios
    .patch(
      `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_GET_PROFILE_URL}`,
      { fullName },
      headers(),
    )
    .then((response) => {
      dispatch(successEditProfile(response.data));
    })
    .catch(({ response }) => {
      const error = response.data;

      dispatch(errorEditProfile(error));
    });
};
