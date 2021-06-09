import React from 'react';

import {
  PopularContainer,
  MyListContainer,
  ContinueWatchingContainer,
  PreviewContainer,
} from '../../Containers';

const Home = () => (
  <>
    <PreviewContainer />
    <div>
      <MyListContainer />
      <PopularContainer />
      <ContinueWatchingContainer />
    </div>
  </>
);

export default Home;
