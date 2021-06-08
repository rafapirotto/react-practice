import React from 'react';

import backgroundImage from './assets/home-background.png';
import styles from './styles/Preview.module.css';

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
              className={`font-extrabold rounded-3xl p-6 flex items-center h-5 ${styles.buttonBorder}`}
            >
              PG 13
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
