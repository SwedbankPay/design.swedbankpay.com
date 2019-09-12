import React from "react";
import PropTypes from "prop-types";

const ColorPreview = ({ name, hex }) => (
    <figure>
        <svg className={name === "White" ? "border" : null}>
            <rect width="100%" height="100%" fill={hex} />
        </svg>
        <figcaption>
            {name}<br/>
            <small>Hex color code: {hex}</small>
        </figcaption>
    </figure>
);

ColorPreview.propTypes = {
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired
};

export default ColorPreview;
