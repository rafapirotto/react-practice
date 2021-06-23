import axios from 'axios';

import { requestGetMovies, successGetMovies, errorGetMovies } from './actions';

export const getMovies = () => (dispatch) => {
  dispatch(requestGetMovies());

  return axios
    .get(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_MOVIES_URL}`)
    .then((response) => {
      dispatch(successGetMovies(response.data));
    })
    .catch(({ response }) => {
      const error = response.data;

      dispatch(errorGetMovies(error));
    });
};
