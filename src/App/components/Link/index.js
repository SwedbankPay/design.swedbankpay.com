import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Link = ({ linkText, leftIcon, rightIcon, smallFont, bright, disabled }) => {
    const linkClasses = classnames(
        leftIcon || rightIcon ? "icon-link" : null,
        smallFont ? "small" : null,
        bright ? "bright" : null,
        disabled ? "disabled" : null
    );

    return (
        <>{"\n"}<a href="" className={linkClasses} onClick={e => e.preventDefault()}>
            {leftIcon && <>{"\n"}<i className="material-icons" aria-hidden="true">{leftIcon}</i></>}
            {leftIcon || rightIcon ? <>{"\n"}<span className={(leftIcon ? "ml-2" : null) || (rightIcon ? "mr-2" : null)}>{linkText}</span>{"\n"}</> : linkText}
            {rightIcon && <>
                <i className="material-icons" aria-hidden="true">{rightIcon}</i>{"\n"}</>}
        </a></>
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
