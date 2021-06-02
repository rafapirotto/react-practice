import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

const defaultProps = {
  title: '',
  url: '',
};

const renderTitle = (title) => (
  <div>
    <h1 className="ml-24 text-3xl font-semibold">{title}</h1>
  </div>
);

const renderTrailer = (url) => (
  <iframe
    className="flex justify-center mt-24 ml-24"
    width="560"
    height="315"
    src={url}
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  />
);

const pascalCase = (s) => s.replaceAll('_', ' ');

const Trailer = ({ title, url }) => (
  <main>
    {renderTitle(`${pascalCase(title)}'s trailer`)}
    {renderTrailer(url)}
  </main>
);

Trailer.propTypes = propTypes;
Trailer.defaultProps = defaultProps;

export default Trailer;
