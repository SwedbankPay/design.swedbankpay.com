import React from "react";
import PropTypes from "prop-types";

const Alert = ({ id, type, display, icon, close, heading, text, linkText, linkHref }) => (
    <div id={id} className={`alert alert-${type}${icon ? " alert-with-icon" : ""}${display ? " in" : ""}`}>{icon ? "\n" : ""}
        {close ? <i className="material-icons" data-alert-close="">close</i> : null}{close ? "\n" : ""}
        {icon ? <i className="material-icons alert-icon">{icon}</i> : null}
        {heading ? <h3 className="alert-heading">{heading}</h3> : null}
        {(text && !linkText) ? <p className="alert-text">{text}</p> : null}{linkText ? "\n" : ""}
        {linkText ? <p className="alert-text">{text || ""}{"\n"}<a className="alert-link" href={linkHref || "#"}>{linkText}</a>{"\n"}</p> : null}
    </div>
);

Alert.propTypes = {
    id: PropTypes.string,
    type: PropTypes.oneOf(["success", "neutral", "warning", "error", "light", "default"]).isRequired,
    display: PropTypes.bool,
    icon: PropTypes.string,
    close: PropTypes.bool,
    heading: PropTypes.string,
    text: PropTypes.string,
    linkText: PropTypes.string,
    linkHref: PropTypes.string
};

export default Alert;
