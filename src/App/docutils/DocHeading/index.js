import React from "react";
import { withRouter, useLocation } from "react-router-dom";

const brandTitle = process.env.brandTitle;

const DocHeading = ({ locationFromJestTest }) => {

    const location = locationFromJestTest ?? useLocation();

    const title = location.title ?? location.pathname.split("/").filter(str => str.length)
        .pop()
        .split("-")
        .map((word, i) => i > 0 ? word : word.charAt(0).toUpperCase() + word.substr(1))
        .join(" ");

    document.title = `${title} | ${brandTitle} Design Guide`;

    return <h1>{title}</h1>;
};

export default withRouter(DocHeading);
