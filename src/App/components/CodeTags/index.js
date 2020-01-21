import React from "react";
import PropTypes from "prop-types";

const CodeTags = ({ type, code }) => (
    <code className={`code-tags code-tags-${type}`}>{code}</code>
);

CodeTags.propTypes = {
    type: PropTypes.string.isRequired,
    code: PropTypes.string.isRequired
};

export default CodeTags;
