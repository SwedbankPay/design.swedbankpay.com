import React from "react";
import PropTypes from "prop-types";

const Alert = ({ id, type, icon, close, text, children }) => (
    <div id={id} className={`alert alert-${type}`}>{icon ? "\n" : ""}
        {icon ? <i className="material-icons alert-icon" aria-hidden="true">{icon}</i> : null}{text ? "\n" : ""}
        {text ? <p>{text}</p> : null}{children ? "\n" : ""}
        {children ? <div className="alert-body">{children}</div> : null}{close ? "\n" : ""}
        {close ? <a href="#" data-alert-close="" onClick={e => e.preventDefault()}>{"\n\t\t"}
            <i className="material-icons" aria-hidden="true">close</i>{"\n\t"}
        </a> : null}{"\n"}
    </div>
);

const ComplexAlert = ({ id, type, icon, close, headerText, children }) => (
    <div id={id} className={`alert alert-complex alert-${type}`}>
        <header className="alert-header">
            {icon
                ? <>
                    {"\n"} <i className="material-icons alert-icon" aria-hidden="true">{icon}</i>
                </>
                : null}
            {headerText
                ? <>
                    {"\n"}
                        {icon ? <h3 className="ml-2">{headerText}</h3> : <h3>{headerText}</h3> }
                    {"\n"}
                </>
                : null}
            {close
                ? <a href="#" data-alert-close="" onClick={e => e.preventDefault()}>{"\n\t\t"}
                    <i className="material-icons" aria-hidden="true">close</i>
                </a>
                : null}
            {"\n"}
        </header>
        {children
            ? <>
                {"\n"}
                <div className={icon ? "alert-body ml-5" : "alert-body"}>
                    {children}
                </div>
                {"\n"}
            </>
            : null}
    </div>
);

Alert.propTypes = {
    id: PropTypes.string,
    type: PropTypes.oneOf(["success", "warning", "danger", "informative"]).isRequired,
    icon: PropTypes.string,
    close: PropTypes.bool,
    text: PropTypes.string
};

export default Alert;

export { ComplexAlert };
