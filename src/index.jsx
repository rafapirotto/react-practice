import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import rootReducer from './app/rootReducer';
import App from './app';
import './index.css';

const createStoreWithMiddleware = applyMiddleware(thunk, logger)(createStore);
const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <App />
    </Provider>
  </React.StrictMode>,
  rootElement,
);
