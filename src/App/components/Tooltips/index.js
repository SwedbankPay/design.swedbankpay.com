import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Tooltip = ({ title, text, className, position, id, icon }) => {
    const tooltipClasses = classnames(
        "tooltip",
        position ? `tooltip-${position}` : null,
        icon ? "has-icon" : null,
        className ? `${className}` : null
    );

    return (
        <button aria-describedby={icon ? id : null} className={tooltipClasses}>{"\n"}
            {title}{"\n"}
            {icon ? <i className="material-icons">{icon ? "help_outline" : "help_outline"}</i> : null}
            <div role="tooltip" id={id}>
                {text}
            </div>
        </button>
    );
};

Tooltip.propTypes = {
    position: PropTypes.string,
    text: PropTypes.string.isRequired
};

export default Tooltip;
