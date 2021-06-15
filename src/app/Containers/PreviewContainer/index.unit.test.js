import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import { SUCCESS, ERROR, LOADING } from '../../../common/constants';
import PreviewContainer from '.';
import { Error, Spinner } from '../../../common/Components';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const getContainerWithSpecificState = (state) => {
  const store = mockStore(state);
  let container = mount(
    <Provider store={store}>
      <PreviewContainer />
    </Provider>,
  );

  return container;
};

describe('PreviewContainer', () => {
  it('Renders the Spinner component when the state value is LOADING', () => {
    const state = { popularMovies: { state: LOADING, content: null } };

    const container = getContainerWithSpecificState(state);

    expect(container.find(Spinner)).toHaveLength(1);
  });

  it('Renders the Error component when the state value is ERROR', () => {
    const state = { popularMovies: { state: ERROR, content: null } };

    const container = getContainerWithSpecificState(state);

    expect(container.find(Error)).toHaveLength(1);
  });

  it('Renders the PreviewContainer when the state value is SUCCESS', () => {
    const movies = [
      {
        title: 'Black Mirror',
        release_date: '2010',
        genres: [{ name: 'Comedy' }, { name: 'Horror' }],
      },
    ];
    const state = {
      popularMovies: {
        state: SUCCESS,
        content: movies,
      },
    };

    const container = getContainerWithSpecificState(state);

    expect(container.find(PreviewContainer)).toHaveLength(1);
  });
});
