import React from "react";
import PropTypes from "prop-types";

import { Icon } from "#";

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

const ComplexAlert = ({ id, type, icon, close, headerText, children }) => (
    <div id={id} className={`alert alert-${type}`}>
        <header className="alert-header">
            {icon
                ? <>
                    {"\n"} <Icon classNames="alert-icon" icon={icon}/>
                </>
                : null}
            {headerText
                ? <>
                    {"\n"}
                        <h3>{headerText}</h3>
                </>
                : null}
            {close
                ? <a href="#" data-alert-close="" onClick={e => e.preventDefault()}>{"\n\t\t"}
                    <Icon icon={"close"}/>{"\n\t"}
                </a>
                : null}
            {"\n"}
        </header>
        {children
            ? <>
                {"\n"}
                <div className="alert-body">
                    {children}
                </div>
                {"\n"}
            </>
            : null}
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

export { ComplexAlert };
