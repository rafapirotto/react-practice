import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import MovieListContainer from '../MovieListContainer';
import { MovieList } from '../../Components';
import { getMovies } from '../PopularContainer/duck/operations';
import { SUCCESS } from '../../../common/constants';
import Movie from '../../Components/Movie';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const getContainerWithSpecificState = (state) => {
  const store = mockStore(state);
  const container = mount(
    <Provider store={store}>
      <Router>
        <MovieListContainer
          operation={getMovies}
          title="Popular on Movy"
          selector={state.popularMovies}
        />
      </Router>
    </Provider>,
  );

  return container;
};

describe('PopularContainer', () => {
  const state = {
    popularMovies: {
      state: SUCCESS,
      content: [{ id: 1, title: 'Black Mirror', poster_url: 'somelink.com' }],
    },
  };

  const container = getContainerWithSpecificState(state);

  it('Renders the MovieList component', () => {
    expect(container.find(MovieList)).toHaveLength(1);
  });
  it('Renders the Link component', () => {
    expect(container.find(Link)).toHaveLength(1);
  });
  it('Renders the Movie component', () => {
    expect(container.find(Movie)).toHaveLength(1);
  });
});
