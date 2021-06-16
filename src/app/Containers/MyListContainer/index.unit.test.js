import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { mount } from 'enzyme';
import { Link } from 'react-router-dom';

import MovieListContainer from '../MovieListContainer';
import { MovieList } from '../../Components';
import { SUCCESS } from '../../../common/constants';
import Movie from '../../Components/Movie';
import { ProviderRouterWrapper } from '../../../common/Components';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const getContainerWithSpecificState = (state) => {
  const store = mockStore(state);
  const container = mount(
    <ProviderRouterWrapper store={store}>
      <MovieListContainer operation={jest.fn} title="My List" selector={state.myListMovies} />
    </ProviderRouterWrapper>,
  );

  return container;
};

describe('MyListContainer', () => {
  const state = {
    myListMovies: {
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
