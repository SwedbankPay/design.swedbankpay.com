import React from "react";
import PropTypes from "prop-types";

const ColorDisplay = ({ hex, rgb, fontColor, width, border }) => (
    <div className={`${width ? width : ""}`}>
        <svg>
            <rect fill={hex} stroke={border && border} />
        </svg>
        <div className={`pl-3 ${fontColor ? fontColor : ""}`}>
            <p className="mb-0">{hex}</p>
            <p>{rgb}</p>
        </div>
    </div>
);

ColorDisplay.propTypes = {
    hex: PropTypes.string,
    rgb: PropTypes.string,
    fontColor: PropTypes.string,
    width: PropTypes.string,
    border: PropTypes.string
};

export default ColorDisplay;
