import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import MovieListContainer from '../MovieListContainer';
import { MovieList } from '../../Components';
import { getContinueWatching } from '../ContinueWatchingContainer/duck/operations';
import { SUCCESS } from '../../../common/constants';
import { BrowserRouter as Router } from 'react-router-dom';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const getContainerWithSpecificState = (state) => {
  const store = mockStore(state);
  const container = mount(
    <Provider store={store}>
      <Router>
        <MovieListContainer
          operation={getContinueWatching}
          title="My List"
          selector={state.continueWatchingMovies}
        />
      </Router>
    </Provider>,
  );

  return container;
};

describe('ContinueWatchingContainer', () => {
  it('Renders the MovieList component', () => {
    const state = {
      continueWatchingMovies: {
        state: SUCCESS,
        content: [{ id: 1, title: 'Black Mirror', poster_url: 'somelink.com' }],
      },
    };

    const container = getContainerWithSpecificState(state);

    expect(container.find(MovieList)).toHaveLength(1);
  });
});
