import React from "react";
import { render } from "react-dom";

import "prismjs";
import "prismjs/themes/prism.css";

import "./less/swedbankpay.less";
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
