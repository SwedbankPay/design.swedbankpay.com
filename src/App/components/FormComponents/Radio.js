import React from "react";
import PropTypes from "prop-types";

const Radio = ({ id, checked, disabled, label, name }) => {
    const attrs = { type: "radio" };
    if (id) attrs.id = id;
    if (name) attrs.name = name;
    if (disabled) attrs.disabled = disabled;
    if (checked) attrs.checked = checked;

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
