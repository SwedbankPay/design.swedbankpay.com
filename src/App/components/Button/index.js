import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({ label, id, name, value, href, icon, loading, type, disabled, btnType, fullWidth, pullRight, input, outline, active, size }) => {
    const btnClasses = classnames(
        "btn",
        type ? `btn-${type}` : null,
        outline ? "btn-outline" : null,
        size ? `btn-${size}` : null,
        loading ? "loading" : null,
        fullWidth ? "btn-block" : null,
        pullRight ? "pull-right" : null,
        active && href ? "active" : null,
        disabled && href ? "disabled" : null
    );

    const attrs = {
        href,
        id,
        name,
        defaultValue: value,
        disabled: href ? null : disabled,
        active: active && !href ? "" : null,
        role: href ? "button" : null,
        type: !href ? btnType || "button" : null,
        "aria-pressed": active ? true : null,
        "aria-disabled": href && disabled ? true : null,
        tabIndex: href && disabled ? "-1" : null
    };

    if (href) {
        return (
            <a className={btnClasses} {...attrs}>{icon ? "\n\t" : null}
                {icon ? <i className="material-icons" aria-hidden="true">{icon}</i> : null}
                {(icon && label) ? <span>{label}</span> : label}
            </a>
        );
    }

    if (input) {
        return <input className={btnClasses} {...attrs}/>;
    }

    return (
        <button className={btnClasses} {...attrs}>{icon ? "\n\t\t" : null}
            {icon ? <><i className="material-icons" aria-hidden="true">{icon}</i>{"\n\t\t"}</> : null}
            {((icon && label) || type === "link" || type === "link-destructive") ? <span>{label}</span> : label}{icon ? "\n\t" : null}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(["executive", "guiding", "link", "destructive", "link-destructive"]).isRequired,
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
    size: PropTypes.oneOf(["lg", "sm", "xs"])
};

export default Button;
