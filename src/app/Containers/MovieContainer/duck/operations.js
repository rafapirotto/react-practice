import axios from 'axios';

import { requestAddToMyList, successAddToMyList, errorAddToMyList } from './actions';
import { headers } from '../../../utils';
import { getMyList } from '../../MyListContainer/duck/operations';

export const addToMyList = (movieId) => (dispatch) => {
  dispatch(requestAddToMyList());

  return axios
    .post(
      `${process.env.REACT_APP_BASE_URL}/${process.env.REACT_APP_LISTS_URL}/2/movie`,
      { movieId },
      headers(),
    )
    .then((response) => {
      dispatch(successAddToMyList(response.data));
      dispatch(getMyList());
    })
    .catch(({ response }) => {
      const error = response.data;

      dispatch(errorAddToMyList(error));
    });
};
