import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Tooltip = ({ title, text, className, position, id, icon, isVisible }) => {
    const tooltipClasses = classnames(
        "tooltip btn btn-secondary",
        position && `tooltip-${position}`,
        className && `${className}`,
        isVisible && "isVisible"
    );

    return (
        <button aria-describedby={icon ? id : null} className={tooltipClasses}>{"\n"}
            {title}
            {icon && <i className="material-icons-outlined">{icon}</i>}{"\n"}
            <span role="tooltip" id={id}>
                {text}
            </span>
        </button>
    );
};

Tooltip.propTypes = {
    position: PropTypes.string,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string
};

export default Tooltip;
