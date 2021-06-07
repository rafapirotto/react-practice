import React from 'react';

import backgroundImage from './assets/home-background.png';

const Preview = ({ movie }) => (
  <div className="flex justify-center mb-4">
    <img
      src={backgroundImage}
      alt="background"
      className="w-screen"
      style={{ background: 'linear-gradient(180deg, #000000 0%, rgba(36, 36, 36, 0.0001) 100%)' }}
    />
    <div className="flex absolute">
      <h2>{movie.release_date}</h2>
      <h2>Action, Thriller</h2>
      <h1>Title</h1>
      <h2>Movie rating</h2>
      <h2>Duration</h2>
      <h2>Director</h2>
      <h2>Stars</h2>
      <h2>Description</h2>
      <h2>Watch Later</h2>
      <h2>Watch Trailer</h2>
      <h2>IMDB logo</h2>
      <h2>Volume</h2>
    </div>
  </div>
);

export default Preview;
