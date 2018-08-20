import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Loader = ({ id, size, muted, visible }) => {
    const loaderClasses = classnames(
        "loader",
        size ? `loader-${size}` : null,
        muted ? "loader-muted" : null,
        visible ? "in" : null
    );

    return <div id={id} className={loaderClasses} data-loader="true"></div>;
};

Loader.propTypes = {
    id: PropTypes.string,
    size: PropTypes.oneOf(["small", "default", "large"]).isRequired,
    muted: PropTypes.bool,
    visible: PropTypes.bool
};

export default Loader;
