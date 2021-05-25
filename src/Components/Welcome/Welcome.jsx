import React from "react";
import PropTypes from "prop-types";

const propTypes = {
    name: PropTypes.string,
};

const defaultProps = {
    name: "stranger",
};

const Welcome = (props) => {
    return <h1>Welcome {props.name}!</h1>;
};

Welcome.propTypes = propTypes;
Welcome.defaultProps = defaultProps;

export default Welcome;
