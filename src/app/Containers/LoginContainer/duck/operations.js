import axios from 'axios';

import { requestLogin, successLogin, errorLogin } from './actions';
import { saveUserDataInLocalStorage } from '../../../utils';

export const login = (email, password) => (dispatch) => {
  dispatch(requestLogin());
  return axios
    .post(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_LOGIN_URL}`, {
      email,
      password,
    })
    .then((response) => {
      saveUserDataInLocalStorage(response.data.token);
      dispatch(successLogin(response.data));
    })
    .catch((response) => {
      const error = response.response.data;

      dispatch(errorLogin(error));
    });
};
