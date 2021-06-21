import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string.isRequired,
};

const FooterTitle = ({ title }) => (
  <div
    className="
              flex
              pt-24
              text-4xl
              sm:justify-center
              sm:pl-0
              md:justify-center
              md:pl-0
              lg:justify-start
              lg:pl-40
          "
  >
    {title}
  </div>
);

FooterTitle.propTypes = propTypes;

export default FooterTitle;
