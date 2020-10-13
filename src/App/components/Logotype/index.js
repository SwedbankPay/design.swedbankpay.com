import React from "react";
import PropTypes from "prop-types";

const Logotype = ({ src, alt, type, size }) => (
    <img src={src} alt={alt} className={`logotype-${type} logotype-${size ? size : "sm"}`}/>
);

Logotype.propTypes = {
    src: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    alt: PropTypes.string,
    size: PropTypes.string
};

export default Logotype;
