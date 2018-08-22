import React from "react";
import PropTypes from "prop-types";

const Alert = ({ id, type, icon, close, text, children }) => (
    <div id={id} className={`alert alert-${type}`}>{icon ? "\n" : ""}
        {icon ? <i className="material-icons alert-icon">{icon}</i> : null}{text ? "\n" : ""}
        {text ? <p>{text}</p> : null}{children ? "\n" : ""}
        {children ? <div className="alert-body">{children}</div> : null}{close ? "\n" : ""}
        {close ? <a href="#" data-alert-close="" onClick={e => e.preventDefault()}>{"\n\t\t"}
            <i className="material-icons">close</i>{"\n\t"}
        </a> : null}{"\n"}
    </div>
);

Alert.propTypes = {
    id: PropTypes.string,
    type: PropTypes.oneOf(["success", "neutral", "warning", "danger", "default"]).isRequired,
    icon: PropTypes.string,
    close: PropTypes.bool,
    text: PropTypes.string
};

export default Alert;
