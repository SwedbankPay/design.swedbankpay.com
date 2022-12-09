import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Tooltip = ({ title, text, className, position, id, icon }) => {
    const tooltipClasses = classnames(
        "tooltip",
        position && `tooltip-${position}`,
        className && `${className}`
    );

    return (
        <button aria-describedby={icon ? id : null} className={tooltipClasses}>{"\n"}
            {title}
            {icon && <i className="material-icons-outlined">{icon}</i>}{"\n"}
            <div role="tooltip" id={id}>
                {text}
            </div>
        </button>
    );
};

Tooltip.propTypes = {
    position: PropTypes.string,
    text: PropTypes.string.isRequired,
    icon: PropTypes.string
};

export default Tooltip;
