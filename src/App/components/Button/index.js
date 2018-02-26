import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, id, name, value, href, icon, loading, color, disabled, type, fullWidth, loader, linkButton, ghostButton, pullRight, input, outline, active, size }) => {
    if (href) return (
        <a
            className={`btn btn-${outline ? "outline-" : ""}${color}${size ? ` btn-${size}` : ""}${loader ? " btn-loader" : ""}${loading ? " loading" : ""}${fullWidth ? " btn-block" : ""}${linkButton ? " btn-link" : ""}${ghostButton ? " btn-ghost" : ""}${pullRight ? " pull-right" : ""}${active ? " active" : "" }`}
            href={href}
            name={name}
            disabled={disabled}
            role="button"
            value={value}>
            {loader ? <div></div> : null}
            {icon ? <i className="material-icons">{icon}</i> : null}
            {(icon && label || loader && label) ? <span>{label}</span> : label}
        </a>
    );

    if (input) return (
        <input
            className={`btn btn-${outline ? "outline-" : ""}${color}${size ? ` btn-${size}` : ""}${loader ? " btn-loader" : ""}${loading ? " loading" : ""}${fullWidth ? " btn-block" : ""}${linkButton ? " btn-link" : ""}${ghostButton ? " btn-ghost" : ""}${pullRight ? " pull-right" : ""}${active ? " active" : "" }`}
            type={type || "button"}
            id={id}
            name={name}
            disabled={disabled}
            value={value}>
        </input>
    );

    return (
        <button
            className={`btn btn-${outline ? "outline-" : ""}${color}${size ? ` btn-${size}` : ""}${loader ? " btn-loader" : ""}${loading ? " loading" : ""}${fullWidth ? " btn-block" : ""}${linkButton ? " btn-link" : ""}${ghostButton ? " btn-ghost" : ""}${pullRight ? " pull-right" : ""}${active ? " active" : "" }`}
            type={type || "button"}
            id={id}
            name={name}
            disabled={disabled}
            value={value}>
            {loader ? <div></div> : null}{icon ? "\n\t" : null}
            {icon ? <i className="material-icons">{icon}</i> : null}{icon ? "\n\t" : null}
            {(icon && label || loader && label) ? <span>{label}</span> : label}{icon ? "\n" : null}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    loading: PropTypes.bool,
    color: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    fullWidth: PropTypes.bool,
    loader: PropTypes.bool,
    linkButton: PropTypes.bool,
    ghostButton: PropTypes.bool,
    pullRight: PropTypes.bool,
    input: PropTypes.bool,
    outline: PropTypes.bool,
    active: PropTypes.bool,
    size: PropTypes.string
};

export default Button;
