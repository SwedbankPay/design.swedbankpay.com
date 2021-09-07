import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Link = ({ linkText, leftIcon, rightIcon, smallFont, bright }) => {
    const linkClasses = classnames(
        leftIcon || rightIcon ? "icon-link" : null,
        smallFont ? "link-small" : null,
        bright ? "bright" : null
    );

    return (
        <a href="" className={linkClasses} onClick={e => e.preventDefault()}>
            {leftIcon && <i className="material-icons" aria-hidden="true">{leftIcon}</i>}
            {leftIcon || rightIcon ? <span className={(leftIcon ? "ml-2" : null) || (rightIcon ? "mr-2" : null)}>{linkText}</span> : linkText}
            {rightIcon && <i className="material-icons" aria-hidden="true">{rightIcon}</i>}
        </a>
    );
};

Link.propTypes = {
    linkText: PropTypes.string.isRequired,
    leftIcon: PropTypes.string,
    rightIcon: PropTypes.string,
    fontSize: PropTypes.string,
    bright: PropTypes.bool
};

export default Link;
