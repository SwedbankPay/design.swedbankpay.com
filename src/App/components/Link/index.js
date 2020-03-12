import React from "react";
import PropTypes from "prop-types";

const Link = ({ linkText, withButton, icon }) => (
    <a href="" className={(withButton ? "ml-1" : null) || (icon ? "icon-link" : null)} onClick={e => e.preventDefault()}>
        {icon && <i className="material-icons">keyboard_arrow_left</i>}
        {linkText}
        {icon && <i className="material-icons h-75">open_in_new</i>}
    </a>
);

Link.propTypes = {
    linkText: PropTypes.string.isRequired,
    withButton: PropTypes.bool,
    icon: PropTypes.bool
};

export default Link;
