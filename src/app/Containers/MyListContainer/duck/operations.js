import axios from 'axios';

import { requestGetMyList, successGetMyList, errorGetMyList } from './actions';
import { headers } from '../../../utils';

export const getMyList = () => (dispatch) => {
  dispatch(requestGetMyList());

  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_LISTS_URL}/2`, headers())
    .then((response) => {
      dispatch(successGetMyList(response.data));
    })
    .catch(({ response }) => {
      const error = response.data;

      dispatch(errorGetMyList(error));
    });
};
