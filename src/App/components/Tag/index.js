import React from "react";
import PropTypes from "prop-types";

const Tag = ({ code, type, text, removable }) => (
    <>
        {code ?
            <code className={`tag code ${type ? type : "primary"}`}>{text}</code>
            :
            <span className={`tag ${type ? type : "primary"} ${removable ? "removable" : ""}`}>{text}
                {removable ? <button type="button" className="close-button"><i className="material-icons m-auto" aria-label="remove tag">close</i></button> : <></> }
            </span>
        }
    </>
);

Tag.propTypes = {
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["primary", "secondary", "tertiary"]),
    removable: PropTypes.bool,
    code: PropTypes.bool
};

export default Tag;
