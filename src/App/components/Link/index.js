import React from "react";
import PropTypes from "prop-types";

const Link = ({ linkText, leftIcon, rightIcon }) => (
    <a href="" className={(leftIcon || rightIcon) ? "icon-link" : null} onClick={e => e.preventDefault()}>
        {leftIcon && <i className="material-icons" aria-hidden="true">{leftIcon}</i>}
        {leftIcon || rightIcon ? <span className={(leftIcon ? "ml-2" : null) || (rightIcon ? "mr-2" : null)}>{linkText}</span> : linkText}
        {rightIcon && <i className="material-icons" aria-hidden="true">{rightIcon}</i>}
    </a>
);

Link.propTypes = {
    linkText: PropTypes.string.isRequired,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string
};

export default Link;
