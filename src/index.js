import React from "react";
import { render } from "react-dom";

import "prismjs";
import "prismjs/themes/prism.css";
import "prismjs/plugins/toolbar/prism-toolbar.css";
import "prismjs/plugins/toolbar/prism-toolbar.min.js";
import "prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard.min.js";

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
