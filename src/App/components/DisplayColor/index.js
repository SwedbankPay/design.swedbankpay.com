import React from "react";
import PropTypes from "prop-types";

const ColorDisplay = ({ hex, rgb, fontColor, border }) => (
    <div className={`${border ? border : ""}`}>
        <svg>
            <rect fill={hex} />
        </svg>
        <div className={`pl-3 ${fontColor ? fontColor : ""}`}>
            <p className="mb-0">{hex}</p>
            <p>{rgb}</p>
        </div>
    </div>
);

ColorDisplay.propTypes = {
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.string.isRequired,
    fontColor: PropTypes.string,
    border: PropTypes.string
};

export default ColorDisplay;
