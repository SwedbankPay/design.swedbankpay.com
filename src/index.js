import React from "react";
import { render } from "react-dom";

import "prismjs";
import "prismjs/themes/prism.css";

// Polyfills
import "./polyfills";

// Px-script
import "./px-script";

import "./less/px.less";
import "./less/themes/documentation.less";
import "./less/designguide.less";
import App from "./App";

render(
    <App />,
    document.getElementById("px-designguide")
);

if (module.hot) {
    module.hot.accept();
}
