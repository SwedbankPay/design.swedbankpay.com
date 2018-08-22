import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Loader = ({ id, size, muted }) => {
    const loaderClasses = classnames(
        "loader",
        size ? `loader-${size}` : null,
        muted ? "loader-muted" : null
    );

    return <div id={id} className={loaderClasses} data-loader=""></div>;
};

Loader.propTypes = {
    id: PropTypes.string,
    size: PropTypes.oneOf(["small", "default", "large"]).isRequired,
    muted: PropTypes.bool
};

export default Loader;
