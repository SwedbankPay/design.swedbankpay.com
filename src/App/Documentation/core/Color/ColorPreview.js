import React from "react";
import PropTypes from "prop-types";

const ColorPreview = ({ name, hex }) => {
    const style = { backgroundColor: hex };

    return (
        <div className="color-preview">
            <div className={`color-block${name === "white" ? " border" : ""}`} style={style}/>
            <p>
                {name}
                <small><br/>HEX: {hex}</small>
            </p>
        </div>
    );
};

ColorPreview.propTypes = {
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired
};

export default ColorPreview;
