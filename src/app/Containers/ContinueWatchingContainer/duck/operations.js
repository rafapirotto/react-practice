import axios from 'axios';

import { requestContinueWatching, successContinueWatching, errorContinueWatching } from './actions';
import { headers } from '../../../utils';

export const getContinueWatching = () => (dispatch) => {
  dispatch(requestContinueWatching());
  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_LISTS_URL}/2`, headers())
    .then((response) => {
      dispatch(successContinueWatching(response.data));
    })
    .catch(({ response }) => {
      const error = response.data;

      dispatch(errorContinueWatching(error));
    });
};
