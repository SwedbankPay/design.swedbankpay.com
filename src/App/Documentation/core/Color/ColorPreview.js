import React from "react";
import PropTypes from "prop-types";

const ColorPreview = ({ name, hex }) => {
    const style = { backgroundColor: hex };

    return (
        <figure className="color-preview">
            <div className={`color-block${name === "white" ? " border" : ""}`} style={style}/>
            <figcaption>
                {name}<br/>
                <small>HEX: {hex}</small>
            </figcaption>
        </figure>
    );
};

ColorPreview.propTypes = {
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired
};

export default ColorPreview;
