import React from "react";

const Movie = ({ url, alt }) => (
  <div className="mr-1">
    <img src={url} alt={alt} />
  </div>
);

export default Movie;
