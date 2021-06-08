import React from 'react';

import backgroundImage from './assets/home-background.png';
import clapperboard from './assets/clapperboard.png';
import styles from './styles/Preview.module.css';

import { StarRating } from '../../../common/Components';

const Preview = ({ movie }) => {
  const { release_date, genres } = movie;

  const genresNames = genres.map(({ name }) => name).toString();

  return (
    <div className="flex justify-center mb-4">
      <img
        src={backgroundImage}
        alt="background"
        className={`w-screen ${styles.backgroundImage}`}
      />
      <div className="flex-col absolute container ml-56 ">
        <div className="flex">
          <div>{release_date}</div>
          <div className="flex items-center mx-2">
            <div className="rounded-sm bg-white w-4px h-4px" />
          </div>
          <div>{genresNames}</div>
        </div>
        <div className="flex mt-20">
          <div className="text-9xl font-bold">BLACK MIRROR</div>
          <div className="flex flex-grow justify-end items-center">
            <button
              className={`font-semibold rounded-3xl p-6 flex items-center h-5 ${styles.buttonBorder}`}
            >
              PG 13
            </button>
          </div>
        </div>
        <div className="flex mt-12">
          <div
            style={{ backgroundColor: '#FF056C' }}
            className="font-semibold rounded-xl px-3 py-1"
          >
            2.30h
          </div>
          <div className="flex ml-12 items-center">
            <div>
              <img src={clapperboard} alt="clapperboard" />
            </div>
            <div className="ml-4">Quentin Tarantino</div>
          </div>
          <StarRating filledStars={4} halfFilledStars={1} />
        </div>
      </div>
    </div>
  );
};

export default Preview;
