import React from "react";
import PropTypes from "prop-types";

const Button = ({ label, id, name, value, href, icon, loading, type, disabled, btnType, fullWidth, loader, pullRight, input, outline, active, size }) => {
    if (href) return (
        <a
            className={`btn btn-${outline ? "outline-" : ""}${type}${size ? ` btn-${size}` : ""}${loading ? " loading" : ""}${fullWidth ? " btn-block" : ""}${pullRight ? " pull-right" : ""}${active ? " active" : "" }`}
            href={href}
            id={id}
            name={name}
            disabled={disabled}
            data-px-loader={loader}
            role="button">{icon ? "\n\t" : null}
            {icon ? <i className="material-icons">{icon}</i> : null}
            {(icon && label) ? <span>{label}</span> : label}
        </a>
    );

    if (input) return (
        <input
            className={`btn btn-${outline ? "outline-" : ""}${type}${size ? ` btn-${size}` : ""}${loading ? " loading" : ""}${fullWidth ? " btn-block" : ""}${pullRight ? " pull-right" : ""}${active ? " active" : "" }`}
            type={btnType || "button"}
            id={id}
            name={name}
            disabled={disabled}
            data-px-loader={loader}
            value={value}
        />
    );

    return (
        <button
            className={`btn btn-${outline ? "outline-" : ""}${type}${size ? ` btn-${size}` : ""}${loading ? " loading" : ""}${fullWidth ? " btn-block" : ""}${pullRight ? " pull-right" : ""}${active ? " active" : "" }`}
            type={btnType || "button"}
            id={id}
            name={name}
            disabled={disabled}
            data-px-loader={loader}>{icon ? "\n\t" : null}
            {icon ? <i className="material-icons">{icon}</i> : null}{icon ? "\n\t" : null}
            {(icon && label) ? <span>{label}</span> : label}{icon ? "\n" : null}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(["default", "brand", "neutral", "success", "warning", "danger", "light", "link"]).isRequired,
    label: PropTypes.string,
    id: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    href: PropTypes.string,
    icon: PropTypes.string,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    btnType: PropTypes.string,
    fullWidth: PropTypes.bool,
    loader: PropTypes.bool,
    pullRight: PropTypes.bool,
    input: PropTypes.bool,
    outline: PropTypes.bool,
    active: PropTypes.bool,
    size: PropTypes.string
};

export default Button;
