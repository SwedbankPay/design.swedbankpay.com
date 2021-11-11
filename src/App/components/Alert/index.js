import React from "react";
import PropTypes from "prop-types";

const Alert = ({ id, type, icon, close, text }) => (
    <div id={id} className={`alert alert-${type}`}>{"\n"}
        <i className="material-icons alert-icon" aria-hidden="true">{icon}</i>
        {text}{"\n"}
        {close ? <>
            <a href="#" data-alert-close="" onClick={e => e.preventDefault()}>{"\n\t\t"}
                <i className="material-icons" aria-hidden="true">close</i>{"\n\t"}
            </a>{"\n"}
        </> : null}
    </div>
);

Alert.propTypes = {
    id: PropTypes.string,
    type: PropTypes.oneOf(["success", "warning", "danger", "informative"]).isRequired,
    icon: PropTypes.string,
    close: PropTypes.bool,
    text: PropTypes.object
};

export default Alert;
