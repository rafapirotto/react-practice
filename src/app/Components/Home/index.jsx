import React from 'react';
import { useSelector } from 'react-redux';

import { MovieListContainer, PreviewContainer } from '../../Containers';

import { getMovies } from '../../Containers/PopularContainer/duck/operations';
import { getMyList } from '../../Containers/MyListContainer/duck/operations';
import { getMostViewed } from '../../Containers/MostViewedContainer/duck/operations';
import { getRecommended } from '../../Containers/RecommendedMoviesContainer/duck/operations';
import { getContinueWatching } from '../../Containers/ContinueWatchingContainer/duck/operations';

const Home = () => {
  const popularMoviesSelector = useSelector((state) => state.popularMovies);
  const myListMoviesSelector = useSelector((state) => state.myListMovies);
  const continueWatchingMoviesSelector = useSelector((state) => state.continueWatchingMovies);
  const mostViewedMoviesSelector = useSelector((state) => state.mostViewedMovies);
  const recommendedMoviesSelector = useSelector((state) => state.recommendedMovies);

  return (
    <>
      <PreviewContainer />
      <div className="mt-80">
        <MovieListContainer operation={getMyList} title="My List" selector={myListMoviesSelector} />
        <MovieListContainer
          operation={getMovies}
          title="Popular on Movy"
          selector={popularMoviesSelector}
        />
        <MovieListContainer
          operation={getContinueWatching}
          title="Continue Watching for Rafa"
          selector={continueWatchingMoviesSelector}
        />

        <MovieListContainer
          operation={getMostViewed}
          title="Most Viewed"
          selector={mostViewedMoviesSelector}
        />
        <MovieListContainer
          operation={getRecommended}
          title="Recommended movies"
          selector={recommendedMoviesSelector}
        />
        <MovieListContainer
          operation={getRecommended}
          title="Recommended movies"
          selector={recommendedMoviesSelector}
        />
        <MovieListContainer
          operation={getRecommended}
          title="Recommended movies"
          selector={recommendedMoviesSelector}
        />
      </div>
    </>
  );
};

export default Home;
