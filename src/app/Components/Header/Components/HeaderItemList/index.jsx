import React from 'react';

import HeaderItem from '../HeaderItem';
import { MY_LIST_ROUTE } from '../../../../routes';

const HeaderItemList = () => (
  <div className="flex ml-32 items-center flex-wrap">
    <HeaderItem title="Home" styles="mx-6 font-normal" id="home-btn" />
    <HeaderItem title="Movies" styles="mx-6" id="movies-btn" />
    <HeaderItem title="Series" styles="mx-6" id="series-btn" />
    <HeaderItem title="Recently Added" styles="mx-6" id="recently-added-btn" />
    <HeaderItem title="My List" styles="mx-6" to={MY_LIST_ROUTE} id="my-list-btn" />
  </div>
);

export default HeaderItemList;
