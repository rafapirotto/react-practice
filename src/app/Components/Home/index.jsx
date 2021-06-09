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
    <div className="mt-80">
      <MyListContainer />
      <PopularContainer />
      <ContinueWatchingContainer />
    </div>
  </>
);

export default Home;
