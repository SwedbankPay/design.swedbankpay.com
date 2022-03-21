import React from "react";
import PropTypes from "prop-types";
import Tooltip from "@components/Tooltips"

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
            {label ? <label htmlFor={id}>{"\n"}
                {label}{"\n"}
                {tooltip &&
                    <Tooltip text={"Additional information"} id={"togglebox-tooltip-example"} />
                }
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
