import React from "react";
import PropTypes from "prop-types";

const Radio = ({ id, checked, disabled, label, name }) => {
    const attrs = {
        type: "radio",
        id: id || null,
        name: name || null,
        disabled: disabled || null,
        defaultChecked: checked || null
    };

    return (
        <div className="radio">{"\n"}
            <input {...attrs} />{"\n"}
            {label ? <label htmlFor={id}>{label}</label> : null}{label ? "\n" : null}
        </div>
    );
};

Radio.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.string
};

export default Radio;
