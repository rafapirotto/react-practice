import React from 'react';

import HeaderItem from '../HeaderItem';

const HeaderItemList = () => (
  <div className="flex ml-32 items-center">
    <HeaderItem title="Home" styles="mx-6 font-normal" />
    <HeaderItem title="Movies" styles="mx-6" />
    <HeaderItem title="Series" styles="mx-6" />
    <HeaderItem title="Recently Added" styles="mx-6" />
    <HeaderItem title="My List" styles="mx-6" />
  </div>
);

export default HeaderItemList;
