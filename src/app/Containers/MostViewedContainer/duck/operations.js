import axios from 'axios';

import { requestGetMostViewed, successGetMostViewed, errorGetMostViewed } from './actions';
import { headers } from '../../../utils';

export const getMostViewed = () => (dispatch) => {
  dispatch(requestGetMostViewed());

  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_LISTS_URL}/5`, headers())
    .then((response) => {
      dispatch(successGetMostViewed(response.data));
    })
    .catch(({ response }) => {
      const error = response.data;

      dispatch(errorGetMostViewed(error));
    });
};
