import React from "react";
import PropTypes from "prop-types";

const Checkbox = ({ id, checked, disabled, label }) => {
    return (
        <div className="checkbox">{"\n"}
            <input type="checkbox" id={id || null} disabled={disabled || null} checked={checked || null} />{"\n"}
            {label ? <label htmlFor={id || null}>{label}</label> : null}{label ? "\n" : null}
        </div>
    );
};

Checkbox.propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string
};

export default Checkbox;
