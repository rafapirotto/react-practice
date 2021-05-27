import axios from 'axios';

import { requestGetMovies, successGetMovies, errorGetMovies } from './actions';
import { BASE_URL, MOVIES_URL } from '../../../utils';

export const getMovies = () => (dispatch) => {
  dispatch(requestGetMovies());
  axios
    .get(`${BASE_URL}/${MOVIES_URL}`)
    .then((response) => {
      dispatch(successGetMovies(response.data));
    })
    .catch((response) => {
      const error = response.response.data;

      dispatch(errorGetMovies(error));
    });
};
