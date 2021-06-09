import React from 'react';

import backgroundImage from './assets/home-background.png';
import clapperboard from './assets/clapperboard.png';
import imdbLogo from './assets/imdb-logo.png';
import watchTrailer from './assets/watch-trailer.png';
import volume from './assets/volume.png';
import watchLater from './assets/watch-later.svg';
import styles from './styles/Preview.module.css';

import { StarRating } from '../../../common/Components';

const Preview = ({ movie }) => {
  const { release_date, genres } = movie;

  const genresNames = genres.map(({ name }) => name).toString();

  return (
    <div>
      <img
        src={backgroundImage}
        alt="background"
        className={`absolute w-screen ${styles.backgroundImage}`}
      />
      <div className="flex justify-center mb-4">
        <div className="flex-col container ml-56 z-10 mt-56">
          <div className="flex">
            <div>{release_date}</div>
            <div className="flex items-center mx-2">
              <div className="rounded-sm bg-white w-4px h-4px" />
            </div>
            <div>{genresNames}</div>
          </div>
          <div className="flex mt-20">
            <div className="text-9xl font-bold">BLACK MIRROR</div>
            <div className="flex flex-grow justify-end items-center min-w-max">
              <button
                className={`font-semibold rounded-3xl p-6 flex items-center h-5 ${styles.buttonBorder} ${styles.withoutOutline}`}
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
          <div className="mt-20 w-4/6">
            Set in a world only minutes from our own, "Black Mirror" unveils how modern technologies
            can backfire and be used against their makers, every episode set in a slightly different
            reality with different characters combating different types of technologies.
          </div>
          <div className="flex mt-40" style={{ color: '#92AAD7' }}>
            <div className="flex items-center">
              <div>
                <img src={watchLater} alt="watch-later" className={styles.clickable} />
              </div>
              <div className="ml-3">Watch Later</div>
            </div>
            <div className="flex items-center ml-12">
              <div>
                <img src={watchTrailer} alt="watch-trailer" className={styles.clickable} />
              </div>
              <div className="ml-3">Watch trailer</div>
            </div>
            <div className="ml-12">
              <img src={imdbLogo} alt="imdb-logo" className={styles.clickable} />
            </div>
            <div className="flex justify-end flex-grow">
              <img src={volume} alt="volume" className={styles.clickable} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;