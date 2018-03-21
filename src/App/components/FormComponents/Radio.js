import React from "react";
import PropTypes from "prop-types";

const Radio = ({ id, checked, disabled, label }) => {
    return (
        <div className="radio">{"\n"}
            <input type="radio" id={id || null} disabled={disabled || null} checked={checked || null} />{"\n"}
            {label ? <label htmlFor={id || null}>{label}</label> : null}{label ? "\n" : null}
        </div>
    );
};

Radio.propTypes = {
    id: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string
};

export default Radio;
