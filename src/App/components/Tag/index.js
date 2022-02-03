import React from "react";
import PropTypes from "prop-types";

const Tag = ({ code, type, text, removable, className}) => (
    <>
        {code ?
            <code className={`tag code ${type ? type : "primary"} ${className ? className : ""}`}>{"\n"}{text}</code>
            :
            <span className={`tag ${type ? type : "primary"} ${removable ? "removable" : ""} ${className ? className : ""}`}>{"\n"}{text}{"\n"}
                {removable ? <button type="button" className="close-button">{"\n"}<i className="material-icons m-auto" aria-label="remove tag">close</i>{"\n"}</button> : <></> }
            </span>
        }
    </>
);

Tag.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    removable: PropTypes.bool,
    code: PropTypes.bool,
    className: PropTypes.string
};

export default Tag;
