import React from "react";
import PropTypes from "prop-types";

const Togglebox = ({ id, checked, disabled, label, tooltip, labelTop }) => {
    const attrs = {
        type: "checkbox",
        id: id || null,
        disabled: disabled || null,
        defaultChecked: checked || null
    };

    return (
        <div className={`togglebox${labelTop ? " label-top" : ""}`}>{"\n"}
            <input {...attrs} />{"\n"}
            {label ? <label htmlFor={id}>
                {label}
                {tooltip &&
                    <>
                        <i className="material-icons" data-tooltip="Some informational text" data-tooltip-position="top">{"\n"}
                                help_outline{"\n"}
                        </i>{"\n"}
                    </>}
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
