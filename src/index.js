import React from "react";
import { render } from "react-dom";
import App from "./App";

import "prismjs";
import "prismjs/themes/prism.css";

import "./less/swedbankpay.less";
// import "./less/payex.less";
import "./less/themes/documentation.less";
import "./less/designguide.less";

render(
    <App />,
    document.getElementById("px-designguide")
);

if (module.hot) {
    module.hot.accept();
}
