import React from "react";
import PropTypes from "prop-types";

const Togglebox = ({ id, checked, disabled, label }) => {
    const attrs = { type: "checkbox" };
    if (id) attrs.id = id;
    if (disabled) attrs.disabled = disabled;
    if (checked) attrs.checked = checked;
    return (
        <div className="togglebox">{"\n"}
            <input {...attrs} />{"\n"}
            {label ? <label htmlFor={id}>{label}</label> : null}{label ? "\n" : null}
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
