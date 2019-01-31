import React from "react";
import { withRouter } from "react-router-dom";

const DocHeading = ({ location }) => {
    const title = location.pathname.split("/").filter(str => str.length)
        .pop()
        .split("-")
        .map((word, i) => i > 0 ? word : word.charAt(0).toUpperCase() + word.substr(1))
        .join(" ");

    document.title = `${title} | PayEx DesignGuide`;

    return <h2 className="h1">{title}</h2>;
};

export default withRouter(DocHeading);
