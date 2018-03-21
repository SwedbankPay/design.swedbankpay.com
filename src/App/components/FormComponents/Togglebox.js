import React from "react";
import PropTypes from "prop-types";

const Togglebox = ({ id, checked, disabled, label }) => {
    return (
        <div className="togglebox">{"\n"}
            <input type="checkbox" id={id || null} disabled={disabled || null} checked={checked || null} />{"\n"}
            {label ? <label htmlFor={id || null}>{label}</label> : null}{label ? "\n" : null}
        </div>
    );
};

Togglebox.propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string
};

export default Togglebox;
