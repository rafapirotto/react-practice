import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const renderTitle = (title) => (
  <div>
    <h1 className="ml-24 text-3xl font-semibold">{title}</h1>
  </div>
);

const renderTrailer = () => {
  return (
    <iframe
      className="flex justify-center mt-24 ml-24"
      width="560"
      height="315"
      src="https://www.youtube.com/embed/4CV41hoyS8A"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  );
};

const pascalCase = (s) => s.replaceAll('_', ' ');

const Trailer = ({ match }) => {
  const {
    params: { movie },
  } = match;

  return (
    <main>
      {renderTitle(`${pascalCase(movie)}'s trailer`)}
      {renderTrailer()}
    </main>
  );
};

Trailer.propTypes = propTypes;

export default Trailer;
