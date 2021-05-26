import React from "react";

const MovieList = ({ movies }) => (
  <main>
    <div className="">
      <h1 className="ml-24 text-3xl font-semibold">My List</h1>
    </div>
    <div className="flex mt-8 ml-24">
      <div className="mr-1">
        <img
          src="https://images.moviepostershop.com/replicas-movie-poster-1000778791.jpg"
          alt="replicas"
        />
      </div>
      <div className="mr-1">
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

export default MovieList;
