import axios from 'axios';

import { requestGetMovies, successGetMovies, errorGetMovies } from './actions';
import { headers } from '../../../utils';

export const getMovies = () => (dispatch) => {
  dispatch(requestGetMovies());

  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_LISTS_URL}/1`, headers())
    .then((response) => {
      dispatch(successGetMovies(response.data));
    })
    .catch((response) => {
      const error = response.response.data;

      dispatch(errorGetMovies(error));
    });
};
