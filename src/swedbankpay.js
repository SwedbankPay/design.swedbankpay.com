import React from "react";
import { render } from "react-dom";
import App from "./App";

import "prismjs";
import "prismjs/themes/prism.css";

import "./less/swedbankpay.less";
import "./less/documentation-swedbankpay.less";

render(
    <App />,
    document.getElementById("designguide")
);

if (module.hot) {
    module.hot.accept();
}
