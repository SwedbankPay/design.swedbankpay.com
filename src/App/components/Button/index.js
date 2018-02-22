import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, id, name, value, href, icon, loading, color, disabled, type, fullWidth, loader, linkButton, ghostButton, pullRight }) => {
    return (
        <button className={`btn btn-${color}`}>{label}</button>
    );
};

Button.propTypes = {
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    loading: PropTypes.bool,
    color: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    fullWidth: PropTypes.bool,
    loader: PropTypes.bool,
    linkButton: PropTypes.bool,
    ghostButton: PropTypes.bool,
    pullRight: PropTypes.bool
};

export default Button;
