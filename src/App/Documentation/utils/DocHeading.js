import React from "react";

// TODO: overkill? [EH]
const _generateTitle = path => path.match(/[^/]*$/)[0]
    .split("-")
    .map(word => word.charAt(0).toUpperCase() + word.substr(1))
    .join(" ");

const DocHeading = ({ location }) => {
    const title = _generateTitle(location.pathname);

    document.title = `${title} | PayEx DesignGuide`;

    return <h1>{title}</h1>;
};

export default DocHeading;
