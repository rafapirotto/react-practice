import React from 'react';

import {
  PopularContainer,
  MyListContainer,
  ContinueWatchingContainer,
  PreviewContainer,
  MostViewedContainer,
  RecommendedMoviesContainer,
} from '../../Containers';

const Home = () => (
  <>
    <PreviewContainer />
    <div className="mt-80">
      <MyListContainer />
      <PopularContainer />
      <ContinueWatchingContainer />

      <MostViewedContainer />
      <RecommendedMoviesContainer />
      <RecommendedMoviesContainer />
      <RecommendedMoviesContainer />
    </div>
  </>
);

export default Home;
