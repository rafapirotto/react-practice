import axios from 'axios';

import { requestGetMovie, successGetMovie, errorGetMovie } from './actions';

export const getMovie = (movieId) => (dispatch) => {
  dispatch(requestGetMovie(movieId));
  axios
    .get(`${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_MOVIES_URL}/${movieId}`)
    .then((response) => {
      dispatch(successGetMovie(response.data));
    })
    .catch((response) => {
      const error = response.response.data;

      dispatch(errorGetMovie(error));
    });
};
