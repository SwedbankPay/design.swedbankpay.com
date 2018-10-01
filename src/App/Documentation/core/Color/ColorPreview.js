import React from "react";
import PropTypes from "prop-types";

const ColorPreview = ({ name, hex }) => (
    <div className={`color-preview bg-${name}`}>
        <p>{name}</p>
        <p>{hex}</p>
    </div>
);

ColorPreview.propTypes = {
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired
};

export default ColorPreview;
