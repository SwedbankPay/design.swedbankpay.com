import React from "react";
import PropTypes from "prop-types";

const Togglebox = ({ id, checked, disabled, label, labelTop }) => {
    const attrs = {
        type: "checkbox",
        id: id || null,
        disabled: disabled || null,
        defaultChecked: checked || null
    };

    return (
        <div className={`togglebox${labelTop ? " label-top" : ""}`}>{"\n"}
            <input {...attrs} />{"\n"}
            {label ? <label htmlFor={id}>{"\n"}
                {label}{"\n"}
            </label> : null}{label ? "\n" : null}
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
