import React from "react";

const MovieList = ({ movies }) => {
  return (
    <main>
      <div class="">
        <h1 class="ml-24 text-3xl font-semibold">My List</h1>
      </div>
      <div class="flex mt-8 ml-24">
        <div class="mr-1">
          <img
            src="https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg"
            alt="replicas"
          />
        </div>
        <div class="mr-1">
          <img
            src="https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg"
            alt="otra"
          />
        </div>
        <div>
          <img
            src="https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg"
            alt="niIdea"
          />
        </div>
      </div>
    </main>
  );
};

export default MovieList;
