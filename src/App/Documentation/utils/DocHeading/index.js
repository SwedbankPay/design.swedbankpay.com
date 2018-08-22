import React from "react";
import { withRouter } from "react-router-dom";

const _setTitle = title => {
    document.title = `${title} | PayEx DesignGuide`;
};

// TODO: overkill? [EH]
const _generateTitle = path => path.match(/[^/]*$/)[0]
    .split("-")
    .map((word, i) => i > 0 ? word : word.charAt(0).toUpperCase() + word.substr(1))
    .join(" ");

const DocHeading = ({ location }) => {
    const title = _generateTitle(location.pathname);
    _setTitle(title);

    return <h1>{title}</h1>;
};

export default withRouter(DocHeading);
