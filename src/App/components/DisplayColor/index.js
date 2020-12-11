import React from "react";
import PropTypes from "prop-types";

const ColorDisplay = ({ hex, rgb, fontColor, width }) => (
    <div className={`d-flex flex-column justify-content-end pl-3 ${width && width}`} style={
        {
            backgroundColor: hex,
            color: fontColor,
            borderRadius: "0.25rem",
            border: hex === "#FFFFFF" ? "1px solid black" : "none"
        }}>
        <p className="m-0 font-weight-bold">{hex}</p>
        <p className="mb-2 font-weight-bold">{rgb}</p>
    </div>
);

ColorDisplay.propTypes = {
    hex: PropTypes.string,
    rgb: PropTypes.string,
    fontColor: PropTypes.string,
    width: PropTypes.string
};

export default ColorDisplay;
