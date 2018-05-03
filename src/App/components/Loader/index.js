import React from "react";
import PropTypes from "prop-types";

const Loader = ({ id, size, muted, visible }) => {
    return <div id={id} className={`loader loader-${size}${muted ? " loader-muted" : ""}${visible ? " in" : ""}`} data-loader="true"></div>;
};

Loader.propTypes = {
    id: PropTypes.string,
    size: PropTypes.oneOf(["small", "default", "large"]).isRequired,
    muted: PropTypes.bool,
    visible: PropTypes.bool
};

export default Loader;
