import React from "react";

const _generateTitle = path => {
    // TODO: overkill? [EH]
    return path.match(/[^/]*$/)[0]
        .split("-")
        .map(word => word.charAt(0).toUpperCase() + word.substr(1))
        .join(" ");
};

const DocViewHeading = ({ location }) => {
    const title = _generateTitle(location.pathname);

    document.title = `${title} | PayEx DesignGuide`;
    return (
        <div className="view-heading">
            <h1>{title}</h1>
        </div>
    );
};

export default DocViewHeading;
