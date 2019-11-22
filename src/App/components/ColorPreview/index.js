import React from "react";
import PropTypes from "prop-types";

const ColorPreview = ({ name, hex, rgb, cmyk }) => (
    <figure>
        <svg className={name === "White" ? "border" : null}>
            <rect width="100%" height="100%" fill={hex} />
        </svg>
        <figcaption>
            {name}<br/>
            <small>Hex color code: {hex}</small>
            {rgb && <><br/><small>RGB color code: {rgb}</small></> }
            {cmyk && <><br/><small>CMYK color code: {cmyk}</small></>}
        </figcaption>
    </figure>
);

ColorPreview.propTypes = {
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    rgb: PropTypes.string,
    cmyk: PropTypes.string
};

export default ColorPreview;
