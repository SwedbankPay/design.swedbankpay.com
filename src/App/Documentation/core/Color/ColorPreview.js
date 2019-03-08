import React from "react";
import PropTypes from "prop-types";

const ColorPreview = ({ name, hex, color }) => {
    const style = { backgroundColor: hex };
    const textStyle = { color: color || null };

    return (
        <div className="color-preview" style={style}>
            <p style={color ? textStyle : null}>{name} ({hex})</p>
        </div>
    );
};

ColorPreview.propTypes = {
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired,
    color: PropTypes.string
};

export default ColorPreview;
