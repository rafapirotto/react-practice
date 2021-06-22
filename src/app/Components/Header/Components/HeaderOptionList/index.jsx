import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import HeaderOption from '../HeaderOption';

import search from '../../assets/search.png';

import styles from './styles/HeaderOptionList.module.css';
import { USER_PROFILE_ROUTE, LOGIN_ROUTE } from '../../../../routes';
import { SUCCESS } from '../../../../../common/constants';
import { getUserProfile } from '../../../../Containers/UserProfileContainer/duck/operations';
import { logout } from '../../../../utils';

const HeaderOptionList = () => {
  const { state, content } = useSelector((state) => state.userProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserProfile());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    state === SUCCESS && (
      <div className="flex items-center flex-grow justify-end">
        <HeaderOption src={search} alt="search" styles={styles.search} />
        <HeaderOption
          src={content.photo_path}
          alt="user"
          styles={styles.userImage}
          to={USER_PROFILE_ROUTE}
        />
        <HeaderOption
          src="https://toppng.com/uploads/preview/logout-comments-logout-icon-white-transparent-11563200974vvdol0inuw.png"
          alt="logout"
          styles={styles.logoutBtn}
          to={LOGIN_ROUTE}
          onClick={() => logout()}
        />
      </div>
    )
  );
};

export default HeaderOptionList;
