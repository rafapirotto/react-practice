import axios from 'axios';

import { requestGetRecommended, successGetRecommended, errorGetRecommended } from './actions';
import { headers } from '../../../utils';

export const getRecommended = () => (dispatch) => {
  dispatch(requestGetRecommended());

  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_LISTS_URL}/6`, headers())
    .then((response) => {
      dispatch(successGetRecommended(response.data));
    })
    .catch((response) => {
      const error = response.response.data;

      dispatch(errorGetRecommended(error));
    });
};
