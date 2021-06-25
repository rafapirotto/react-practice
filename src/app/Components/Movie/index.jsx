import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { capitalCase } from 'change-case';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import styles from './styles/Movie.module.css';
import addToFavorites from './assets/addToFavorites.svg';
import shape from './assets/shape.png';

import { StarRating } from '../../../common/Components';

import { addToMyList } from '../../Containers/MovieContainer/duck/operations';

const propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  watchingProgress: PropTypes.bool,
  id: PropTypes.number,
  to: PropTypes.string.isRequired,
};

const defaultProps = {
  watchingProgress: false,
  id: -1,
};

const renderProgressBar = () => {
  const progress = 80;
  // const progress = randomIntegerBetween(1, 100);
  const left = 100 - progress;

  return (
    <div className="flex mt-1">
      <div
        style={{
          width: `${progress}%`,
        }}
        className={styles.currentProgressBar}
      />
      <div
        className={styles.leftProgressBar}
        style={{
          width: `${left}%`,
        }}
      />
    </div>
  );
};

const Movie = ({ url, title, watchingProgress, id, to, listTitle }) => {
  const [hovered, setHovered] = useState(false);
  const dispatch = useDispatch();

  const renderHoveredComponents = () => (
    <>
      <img
        src={addToFavorites}
        alt="favorites"
        className="absolute z-10 top-4 left-4 cursor-pointer"
        onClick={() => {
          dispatch(addToMyList(id));
        }}
      />
      <img src={shape} alt="shape" className="absolute z-10 top-4 left-10" />
      <button
        className={`absolute z-10 font-medium top-4 left-16 text-sm rounded-3xl p-2.5 flex 
              items-center h-2 ${styles.buttonBorder} ${styles.withoutOutline} ${styles.purple}`}
      >
        PG 13
      </button>
      <div className="absolute top-20 left-4 z-10 font-medium text-lg">{capitalCase(title)}</div>
      <div className="absolute top-32 z-10 right-24">
        <StarRating filledStars={2} halfFilledStars={1} />
      </div>
      <div className="absolute top-40 left-4 z-10 font-normal text-sm">Kids</div>
      <div
        className="absolute left-12 z-10 rounded-sm bg-white w-4px h-4px"
        style={{ top: '169px' }}
      />
      <div className="absolute top-40 left-16 z-10 font-normal text-sm">Fantasy</div>
    </>
  );

  return (
    <div
      className="pr-4 pb-4 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && listTitle !== 'My List' && renderHoveredComponents()}
      <Link to={to}>
        <img
          src={url}
          alt={title}
          className="max-w-sm max-h-48 transform duration-500 hover:scale-110"
        />
      </Link>
      {watchingProgress && renderProgressBar()}
    </div>
  );
};

Movie.propTypes = propTypes;
Movie.defaultProps = defaultProps;

export default Movie;
