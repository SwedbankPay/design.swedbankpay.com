import React from "react";
import PropTypes from "prop-types";

const Tag = ({ code, type, text, removable }) => (
    <>
        {code ?
            <code className={`tag code ${type}`}>{text}</code>
            :
            <span className={`tag mb-1 ${type ? type : "primary"} ${removable ? "removable" : ""}`}>{text}
                {removable ? <button type="button" className="close-button"><i className="material-icons m-auto" aria-label="remove tag">close</i></button> : <></> }
            </span>
        }
    </>
);

Tag.propTypes = {
    filterText: PropTypes.string.isRequired,
    type: PropTypes.oneOf(["secondary", "tertiary"]) || "primary",
    removable: PropTypes.bool,
    code: PropTypes.bool
};

export default Tag;
