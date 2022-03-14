import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Tooltip = ({ text, position, id, icon }) => {
    const tooltipClasses = classnames(
        "tooltip",
        "hidden",
        position ? `tooltip-${position}` : null
    );

    return (
        <button aria-describedby={icon ? id : null} className={tooltipClasses}>{"\n"}
            <i className="material-icons">{icon ? icon : "help_outline"}</i>
            <div role="tooltip" id={id}>
                {text}
            </div>
        </button>
    );
};

Tooltip.propTypes = {
    position: PropTypes.oneOfType(["right", "left", "bottom"]),
    text: PropTypes.string.isRequired
};

export default Tooltip;
