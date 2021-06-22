import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import checked from './assets/checked.png';
import styles from './styles/UserProfile.module.css';
import { DASHBOARD_ROUTE, USER_PROFILE_ROUTE } from '../../routes';

const propTypes = {
  onClick: PropTypes.func.isRequired,
  photoPath: PropTypes.string.isRequired,
  fullName: PropTypes.string.isRequired,
  setFullName: PropTypes.func.isRequired,
};

const UserProfile = ({ onClick, photoPath, fullName, setFullName }) => (
  <div className="flex flex-col mx-auto w-4/6 font-normal">
    <div>
      <h1 className="text-5xl mb-4">Edit Profile</h1>
      <hr className={`${styles.separator} opacity-20`} />
    </div>
    <div className={`flex mt-10 ${styles.userImage} align-center`}>
      <div
        className={`
              border-solid
              rounded-md
              ${styles.userImageBackground}
              min-w-max
              ${styles.profileImage}
          `}
      >
        <img src={photoPath} className={styles.defaultImage} alt="default" />
      </div>
      <div className="ml-24 w-2/4">
        <div className="pb-2 w-full">
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            className={`
                      bg-black
                      w-full
                      h-10
                      rounded
                      pl-2
                      text-2xl
                      min-w-max
                      outline-none
                      ${styles.blueBorder}
                  `}
          />
        </div>
        <div>
          <h2 className="text-2xl mb-3">Language:</h2>
        </div>
        <div className="pb-2">
          <select
            name="languages"
            className={`
                      bg-black
                      w-1/5
                      h-10
                      rounded
                      pl-3
                      text-lg
                      min-w-max
                     ${styles.blueBorder}
                  `}
          >
            <option value="english">English</option>
            <option value="spanish">Spanish</option>
            <option value="portuguese">Portuguese</option>
            <option value="german">German</option>
          </select>
        </div>
        <div>
          <h2 className="text-2xl mb-3">Allowed TV shows and movies:</h2>
        </div>
        <div className="pb-2">
          <select
            name="allowed-content"
            className={`
                      bg-black
                      w-2/5
                      h-10
                      rounded
                      pl-3
                      text-lg
                      min-w-max
                      ${styles.blueBorder}
                  `}
          >
            <option value="all">All Maturity levels</option>
            <option value="mature">Mature content</option>
            <option value="kids">Kids content</option>
          </select>
        </div>
      </div>
      <div className={`ml-8 ${styles.checked}`}>
        <img
          src={checked}
          className={`
                  rounded
                  h-10
                  w-10
                  min-w-max
                  ${styles.blueBorder}
                  ${styles.checkedPadding}
              `}
          alt="checked"
        />
      </div>
      <div className={`ml-8 text-2xl flex items-center ${styles.checkbox}`}>
        <h1>Kid?</h1>
      </div>
    </div>
    <div className="mt-10">
      <hr className={`${styles.separator} opacity-20`} />
    </div>
    <div className="flex mt-6 w-2/4">
      <Link to={USER_PROFILE_ROUTE} className={styles.saveBtn}>
        <div
          className="
                  flex
                  justify-center
                  items-center
                  rounded-md
                  h-12
                  bg-blue-500
                  text-lg
              "
          onClick={() => onClick()}
        >
          SAVE
        </div>
      </Link>
      <Link to={DASHBOARD_ROUTE} className={`ml-6 ${styles.cancelBtn}`}>
        <div
          className={`
                  flex
                  justify-center
                  items-center
                  rounded-md
                  h-12
                  text-lg
                  ${styles.blueBorder}
              `}
        >
          CANCEL
        </div>
      </Link>
      <Link to={USER_PROFILE_ROUTE} className={`ml-6 ${styles.deleteBtn}`}>
        <div
          className={`
                  flex
                  justify-center
                  items-center
                  rounded-md
                  h-12
                  text-lg
                  ${styles.blueBorder}
                  ${styles.growTwice}
              `}
        >
          DELETE PROFILE
        </div>
      </Link>
    </div>
  </div>
);

UserProfile.propTypes = propTypes;

export default UserProfile;
