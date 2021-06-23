import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { ERROR, LOADING, SUCCESS } from '../../../common/constants';
import { editUserProfile } from '../../Containers/UserProfileContainer/duck/operations';
import { Error, Spinner } from '../../../common/Components';
import { UserProfile } from '../../Components';

const renderComponentConditionally = (condition, component) => condition && component;

const UserProfileContainer = () => {
  const { state, content } = useSelector((state) => state.userProfile);
  const [fullName, setFullName] = useState('');
  const dispatch = useDispatch();

  const renderComponent = () => (
    <UserProfile
      onClick={() => dispatch(editUserProfile(fullName))}
      photoPath={content.photo_path}
      fullName={fullName}
      setFullName={setFullName}
    />
  );

  useEffect(() => {
    if (state === SUCCESS) {
      setFullName(content.full_name);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <>
      {renderComponentConditionally(state === LOADING, <Spinner />)}
      {renderComponentConditionally(state === ERROR, <Error />)}
      {renderComponentConditionally(state === SUCCESS, content && renderComponent())}
    </>
  );
};

export default UserProfileContainer;
