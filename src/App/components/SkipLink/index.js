import React from "react";

const SkipLink = ({ id }) => (
    <a id={`${id ? id : "skip-link"}`} className="skip-link" href="#doc-view">Skip to main content</a>
);

export default SkipLink;
