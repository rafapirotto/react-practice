import React from 'react';

import FooterItem from '../FooterItem';

const FooterItemList = () => (
  <div
    className="
              mt-12
              grid
              pb-40
              sm:grid-cols-1
              sm:pl-0
              sm:text-center
              md:grid-cols-2
              md:pl-0
              md:text-center
              lg:grid-cols-4
              lg:pl-40
              lg:text-left
          "
  >
    <FooterItem title="FAQ" />
    <FooterItem title="Help Center" />
    <FooterItem title="Account" />
    <FooterItem title="Media Center" />
    <FooterItem title="Privacy" />
    <FooterItem title="Jobs" />
    <FooterItem title="Ways to Watch" />
    <FooterItem title="Terms of Use" />
    <FooterItem title="Speed Test" />
    <FooterItem title="Cookie Preferences" />
    <FooterItem title="Corporate Information" />
    <FooterItem title="Contact Us" />
  </div>
);

export default FooterItemList;
