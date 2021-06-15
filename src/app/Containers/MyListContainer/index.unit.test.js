import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import { BrowserRouter as Router, Link } from 'react-router-dom';

import MovieListContainer from '../MovieListContainer';
import { MovieList } from '../../Components';
import { SUCCESS } from '../../../common/constants';
import Movie from '../../Components/Movie';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const operation = () => [
  {
    id: 1,
    title: 'Black Mirror',

    poster_url:
      'https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg',
  },
];

const getContainerWithSpecificState = (state) => {
  const store = mockStore(state);
  const container = mount(
    <Provider store={store}>
      <Router>
        <MovieListContainer operation={operation} title="My List" selector={state.myListMovies} />
      </Router>
    </Provider>,
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
