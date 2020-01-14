import React from "react";
import PropTypes from "prop-types";

const CodeTags = ({ type, code }) => (
    <span className={`code-tags code-tags-${type}`}>{code}</span>
);

CodeTags.propTypes = {
    type: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
};

export default CodeTags;
