import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Button = ({ label, id, name, value, href, icon, loading, type, disabled, btnType, fullWidth, loader, pullRight, input, outline, active, size }) => {
    const btnClasses = classnames(
        "btn",
        `btn-${outline ? "outline-" : ""}${type}`,
        size ? `btn-${size}` : null,
        loading ? "loading" : null,
        fullWidth ? "btn-block" : null,
        pullRight ? "pull-right" : null,
        active ? "active" : null
    );

    const attrs = {
        href,
        id,
        name,
        disabled,
        "data-button-loader": loader ? "" : null,
        defaultValue: value
    };

    href ? attrs.role = "button" : attrs.type = btnType || "button";

    if (href) {
        return (
            <a className={btnClasses} {...attrs}>{icon ? "\n\t" : null}
                {icon ? <i className="material-icons">{icon}</i> : null}
                {(icon && label) ? <span>{label}</span> : label}
            </a>
        );
    }

    if (input) {
        return <input className={btnClasses} {...attrs}/>;
    }

    return (
        <button className={btnClasses} {...attrs}>{icon ? "\n\t\t" : null}
            {icon ? <i className="material-icons">{icon}</i> : null}{icon ? "\n\t\t" : null}
            {(icon && label) ? <span>{label}</span> : label}{icon ? "\n\t" : null}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(["primary", "secondary", "danger", "link"]).isRequired,
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
