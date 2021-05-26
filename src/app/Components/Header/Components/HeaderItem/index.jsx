import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  title: PropTypes.string.isRequired,
  styles: PropTypes.string,
};

const defaultProps = {
  styles: "",
};

const HeaderItem = ({ title, styles }) => (
  <div className={styles}>
    <a href="/#">{title} </a>
  </div>
);

HeaderItem.propTypes = propTypes;
HeaderItem.defaultProps = defaultProps;

export default HeaderItem;
