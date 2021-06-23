import React from 'react';

import FooterItem from '../FooterItem';
import { PRIVACY_ROUTE } from '../../../../routes';

const FooterItemList = () => {
  const footerTitles = [
    'FAQ',
    'Help Center',
    'Account',
    'Media Center',
    'Privacy',
    'Jobs',
    'Ways to Watch',
    'Terms of Use',
    'Speed Test',
    'Cookie Preferences',
    'Corporate Information',
    'Contact Us',
  ];

  const renderFooterItems = (titles) =>
    titles.map((title) => {
      let props = {
        title,
        key: title,
      };

      if (title === 'Privacy') {
        props = { ...props, to: PRIVACY_ROUTE };
      }

      return <FooterItem {...props} />;
    });

  return (
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
      {renderFooterItems(footerTitles)}
    </div>
  );
};

export default FooterItemList;
