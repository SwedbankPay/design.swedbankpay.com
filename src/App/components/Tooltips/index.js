import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Tooltip = ({ title, text, className, position, id, icon, isVisible }) => {
    const tooltipClasses = classnames(
        "tooltip",
        "btn btn-link",
        position && `tooltip-${position}`,
        isVisible && "isVisible",
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
    icon: PropTypes.string,
    isVisible: PropTypes.bool
};

export default Tooltip;
